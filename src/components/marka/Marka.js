import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

const Marka = ({ setVisible }) => {
  const arr = [
    "Alcatel",
    "Casper",
    "Cat",
    "Dijitsu",
    "General Mobile",
    "GM",
    "GUARD",
  ];
  return (
    <div className="marka-wrapper-fix">
      <div className="filter-wrapper-first">
        <div className="filter-wrapper">
          <div className="filter-title">
            <span onClick={() => setVisible(false)}>
              <BsArrowLeft size={20} color={"gray"} />
            </span>
            <h1>Marka</h1>
            <p></p>
          </div>
        </div>
      </div>
      <div className="marka-wrapper-one">
        <div className="marka-wrapper-one-div">
          <input type="text" name="" value="" placeholder="Marka Ara" />
          <span className="search-marka">
            <BiSearch size={18} />
          </span>
        </div>
      </div>
      <div className="marka-wrapper-two">
        <div>Popüler Markalar</div>
      </div>
      <div className="marka-wrapper-three">
        <div>
          <div>
            {" "}
            <p>Apple</p>
          </div>
          <div>
            {" "}
            <p>Samsung</p>
          </div>
          <div>
            {" "}
            <p>Xiaomi</p>
          </div>
          <div>
            {" "}
            <p>Oppo</p>
          </div>
          <div>
            {" "}
            <p>Huawei</p>
          </div>
          <div>
            {" "}
            <p>POCO</p>
          </div>
        </div>
      </div>
      <div className="marka-wrapper-four">
        <div>Diğer Markalar</div>
      </div>
      <div className="marka-wrapper-five">
        {arr.map((item, index) => (
          <div className="marka-map" key={index}>
            <div>
              <input type="radio" id={item} name="group" value={item} />
              <label for={item}>{item}</label>
            </div>
          </div>
        ))}
      </div>
      <div className="button-wrappers">
        <button>Uygula</button>
      </div>
    </div>
  );
};

export default Marka;
