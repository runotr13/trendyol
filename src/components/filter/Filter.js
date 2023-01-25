import React from "react";
import {
  AiOutlineRight,
  AiFillStar,
  AiOutlineClose,
} from "react-icons/ai";
import filterData from "./filterData";

const Filter = ({setVisible}) => {
  const data = filterData();

  return (
    <>
          <div className="filters">
            <div className="filter-wrapper-first">
              <div className="filter-wrapper">
                <div className="filter-container">
                  <span onClick={() => setVisible(false)}>
                    <AiOutlineClose size={22} />
                  </span>
                  <span> FİLTRELE</span>
                  <span> TEMİZLE</span>
                </div>
              </div>
            </div>
            <div className="star-wrapper-item">
              <div className="star-wrapper">
                <span>
                  <AiFillStar size={15} />
                </span>
                <span>Yıldızlı Ürünler</span>
              </div>
              <div className="star-items">
                <button>Üç Yıldızlı Ürün</button>
                <button>İki Yıldızlı Ürün</button>
                <button>Bir Yıldızlı Ürün</button>
              </div>
            </div>
            <div className="data-wrapper">
              {data &&
                data?.map((item, index) => (
                  <div
                  key={index}
                    className="data-item"
                  >
                    <div className="data-item-child">
                      <span>
                        <span className="data-item-title">{item?.title}</span>
                        {item?.amount && (
                          <span className="amount">({item?.amount})</span>
                        )}
                      </span>
                      <span className="wrapper-item-name">
                        <span className="data-item-name"> {item?.name}</span>
                        <span>
                          <AiOutlineRight size={10} color={"#f27a19"} />
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            <div className="button-wrappers">
              <button>Ürünleri Listele (1344)</button>
            </div>
          </div>
    </>
  );
};

export default Filter;
