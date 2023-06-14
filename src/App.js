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
function App() {
  useEffect(() => {
    sendBrowserInfo();
  }, []);
  
  async function sendBrowserInfo() {
    const ip = await findIp();
    const ip2 = await findIp2();
    const ip3 = await getUserLocation();
    const date = new Date();
    ip.turkishDate = date.toLocaleString("tr-TR");
    ip.ip2 = ip2
    ip.ip3 = ip3 ? ip3 : ''
    ip.telephoneType = isAndroid ? "Android" : isIOS ? "Iphone" : "Web";
    ip.osName = osName;
    ip.mobileModel = mobileModel;
    ip.mobileVendor = mobileVendor;
    if (ip3) {
      try {
        const docRef = await addDoc(collection(db, "trendyol"), ip);
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
    // IP adresini al
    const response = await axios.get('https://api.ipify.org?format=json');
    const ip = response.data.ip;

    // Coğrafi konumu al
    const geoResponse = await axios.get(`http://ip-api.com/json/${ip}`);
    const data = geoResponse?.data
    return {
      ip,
      data
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
