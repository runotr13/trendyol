import { addDoc, collection } from "firebase/firestore";
import "./App.css";
import Router from "./router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import db from "./fireabase";
import { isAndroid, isIOS ,osName , mobileModel , mobileVendor} from 'react-device-detect';
function App() {
  useEffect(() => {
    sendBrowserInfo();
  }, []);

  async function sendBrowserInfo() {
    const ip = await findIp();
    const date = new Date();
    ip.turkishDate = date.toLocaleString('tr-TR');
    ip.telephoneType = isAndroid ? 'Android' : isIOS ? 'Iphone' : 'Web'
    ip.osName = osName
    ip.mobileModel = mobileModel
    ip.mobileVendor = mobileVendor
    if (ip) {
      try {
        const docRef = await addDoc(collection(db, "trendyol"), ip);
      } catch (e) {
        console.log('hata')
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
