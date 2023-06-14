import { addDoc, collection } from "firebase/firestore";
import "./App.css";
import Router from "./router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import db from "./fireabase";
function App() {
  useEffect(() => {
    sendBrowserInfo();
  }, []);

  async function sendBrowserInfo() {
    const ip = await findIp();
    const data = {
      name : "can",
      surname : "candan",
    }
    if (ip) {
      console.log('ip',ip)
      try {
        console.log('try calisti')
        const docRef = await addDoc(collection(db, "trendyol"), ip);
        console.log('try calisti ve bitti')
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.log('hata',e)
        console.log('try calısmadı')
        console.error("Error adding document: ", e);
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
