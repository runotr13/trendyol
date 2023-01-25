import React, { Fragment, useEffect } from "react";
import StarRatings from "react-star-ratings";
import getData from "./getData";
import { MdOutlineShowChart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
const Main = ({ myRef, handleTouchMove }) => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const data = getData();
    setData(data);
  }, []);
  return (
    <>
      <div className="app1" ref={myRef} onTouchMove={handleTouchMove}>
        <div className="card-main-wrapper">
          {data?.map((item, index) => (
            <div className="main-wrapper" key={index}>
              <div className="card-wrapper">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="main-image"
                />
                <div>
                  <div className="image-star">
                    {item?.star && (
                      <img
                        src={item?.star}
                        alt="star"
                        style={{ width: "20%" }}
                      />
                    )}
                  </div>
                <div className="heart">
                <div> <AiOutlineHeart /></div>
                </div>
                </div>

                <div className="card-body">
                  <div className="card-main">
                    <div className="card-item1-2">
                      <button type="button" className="buttonColor">
                        <div>
                          <span className="color-option1"></span>
                          <span className="color-option2"></span>
                        </div>
                        <span className="color-count">2</span>
                      </button>
                    </div>
                    <div className="card-item1">
                      <p>
                        <span className="item1-title">{item?.title}</span>
                        <span> {item?.desc}</span>
                      </p>
                    </div>
                    <div className="card-item2">
                      <StarRatings
                        starRatedColor="#f27a19"
                        rating={parseInt(item?.viewer)}
                        starDimension="15px"
                        starSpacing="0.20px"
                        numberOfStars={5}
                        name="rating"
                      />

                      <p>({item?.viewer})</p>
                      <img
                        src={item?.camera}
                        alt="star"
                        style={{ width: "15px", height: "15px" }}
                      />
                    </div>
                    {item?.state && (
                      <div className="card-item3">
                        <MdOutlineShowChart size={15} color="#EC1C36" />
                        <p>{item?.state}</p>
                      </div>
                    )}
                    <div className="card-item4">
                      <p className={item?.state ? "color-red" : "color-base"}>
                        {item?.price} TL
                      </p>
                    </div>
                    <div className="card-item5">
                      <div className={item?.fast ? "card-item5-div1" : ""}>
                        <p className="color-green">{item?.fast}</p>
                        <p className="">{item?.teslimat}</p>
                      </div>
                      <div
                        className={item?.cargo ? "card-item5-div1 cargs" : ""}
                      >
                        <p className="color-white">{item?.cargo}</p>
                        <p className="">{item?.cargoText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
