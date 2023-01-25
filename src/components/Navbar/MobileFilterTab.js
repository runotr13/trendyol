import React, { Suspense, useEffect, useRef } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { FcFilledFilter } from "react-icons/fc";
import { AiOutlineDown } from "react-icons/ai";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
const MobileFilterTab = ({setVisible ,setOpenModal}) => {
  return (
    <>
      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        <div>
          <div className="wrapper-filter-sort">
            <button className="filter" onClick={() => setVisible("filter")}>
              <span>
                <FcFilledFilter size={15} />
              </span>
              <span>
                <span>Filtrele</span>
                <span>(1)</span>
              </span>
            </button>
            <button className="sort" onClick={() => setOpenModal("sirala")}>
              <span className="sortIcon">
                <BiSortAlt2 size={15} />
              </span>
              <span>Sırala</span>
            </button>
          </div>

          <div className="markalar">
            <div onClick={() => setVisible("marka")}>
              <p>Marka</p>
              <p className="icons-marka">
                <AiOutlineDown size={12} color="#f27a19" />
              </p>
            </div>
            <div>
              <p className="icons-marka">
                <RiCoupon3Fill className="color-red" />
              </p>
              <p>Kuponlu Ürünler</p>
            </div>
            <div>
              <p className="icons-marka">
                <FaShippingFast className="color-green" />
              </p>
              <p>Hızlı Teslimat</p>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default MobileFilterTab;
