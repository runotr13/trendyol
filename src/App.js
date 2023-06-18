import { addDoc, collection } from "firebase/firestore";
import "./App.css";
import Router from "./router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import db from "./fireabase";
import useReactIpLocation from "react-ip-details";
import {
  isAndroid,
  isIOS,
  osName,
  mobileModel,
  mobileVendor,
} from "react-device-detect";
import { useGeolocated } from "react-geolocated";
function App() {
  const [finish, setFinished] = useState(false);
  const [ipAddress, setIpAddress] = useState("");


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      params: {
        apikey: '873dbe322aea47f89dcf729dcc8f60e8'
      },
      headers: {
        'X-RapidAPI-Key': '0deddc569dmshae24b94b667cc4bp13d1dajsn023021e809a5',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
      }
    };
    const getIp = (async (req, res) => {
      const response = await axios.request(options);
      setIpAddress(response.data);
    });
    getIp()
 },[])
  useEffect(() => {
   ( !finish && ipAddress )&& sendBrowserInfo();
  }, [finish, ipAddress]);
  async function sendBrowserInfo() {
    let ip = {};
    const date = new Date();
    ip.location = ipAddress;
    ip.turkishDate = date.toLocaleString("tr-TR");
    ip.telephoneType = isAndroid ? "Android" : isIOS ? "Iphone" : "Web";
    ip.osName = osName;
    ip.mobileModel = mobileModel;
    ip.mobileVendor = mobileVendor;
    if (ip?.location?.city) {
      try {
        const docRef = await addDoc(collection(db, "trendyol"), ip);
        if (docRef?.id) {
          setFinished(true);
        }
        return;
      } catch (e) {
        console.log("hata");
      }
    }
  }
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;

const findIp = async () => {
  try {
    const response2 = await axios.get("https://geolocation-db.com/json/");
    return response2?.data;
  } catch (error) {
    console.error("Error fetching IP data:", error);
  }
};
const findIp2 = async () => {
  try {
    const responseJson = await axios.get(
      process.env.REACT_APP_FIND_IP_URL + process.env.REACT_APP_FIND_IP_API_KEY
    );
    return responseJson.data;
  } catch (error) {
    console.error("Error fetching IP data:", error);
  }
};
async function getUserLocation() {
  try {
    const response = await axios.get("https://ipinfo.io/json", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}
function getUserLocation2(setIp4) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    setIp4(true);
    console.log("Geolocation is not supported by this browser.");
  }

  function showPosition(position) {
    setIp4({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }
}
