import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import trendyol from "../../assets/images/title/trendyol.svg";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const NavbarMain = () => {
  const ref = React.useRef(null);
  const handleFocusClick = () => {
    ref.current.focus();
  };
  return (
    <>
      <div className="grid-container">
        <div className="direction">
          <BsArrowLeft size={20} color={"gray"} />
        </div>
        <div className="logo-header">
          <img src={trendyol} alt="Trendyol" />
        </div>


        
        <div className="search-header">
          <input
            type="text"
            ref={ref}
            placeholder="Akıllı Cep Telefonu "
            autoFocus={true}
          />
          <div className="search-icon">
            <BiSearch size={22} onClick={handleFocusClick} />
          </div>
          <div className="search-icon2">
            <AiOutlineCloseCircle size={22} />
          </div>
        </div>




        <div className="my-account">
          <div className="items">
            <MdOutlineAccountCircle size={15} />
            <span>Hesabım</span>
          </div>
          <div className="items">
            <AiOutlineHeart size={15} />
            <span>Favorilerim</span>
          </div>
          <div className="items">
            <SlBasket size={15} />
            <span>Sepetim</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
