import React, { useState } from "react";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { BsBasketFill } from "react-icons/bs";
const Footer = () => {
  const data = [
    { icon: <AiFillHome size={20} />, name: "Anasayfa" },
    { icon: <BsBasketFill size={20} />, name: "Trendyol Go" },
    { icon: <AiOutlineHeart size={20} />, name: "Favorilerim" },
    { icon: <SlBasket size={20} />, name: "Sepetim" },
    { icon: <MdOutlineAccountCircle size={20} />, name: "Hesabım" },
  ];
  const [state, setState] = useState("Anasayfa");
  const handleClick = (name) => {
    setState(name);
    console.log("name", name);
  };
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-wrapper-header">
          {data.map((item, index) => (
            <div
              key={index}
              className={
                state === item?.name ? "wrapper-item active " : "wrapper-item"
              }
              onClick={() => handleClick(item.name)}
            >
              <span className="icons-footer">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
