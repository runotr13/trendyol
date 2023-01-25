import React from "react";
import MobileFilterTab from "./MobileFilterTab";
import NavbarTop from "./NavbarTop";
import NavbarMain from "./NavbarMain";
import NavbarBottom from "./NavbarBottom";
const Navbar = ({ menuVisible , setVisible ,setOpenModal}) => {
  const path = window.location.pathname;
  return (
    <>
      <div className={path === "/filter" || path === "/marka" ? " " : "fixed"}>
        <div className="app">
          <NavbarTop />
          <NavbarMain />
          <NavbarBottom />
        </div>
        {menuVisible ? (
          <div className="mobile-filter-sort">
            <MobileFilterTab setVisible={setVisible} setOpenModal={setOpenModal} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Navbar;
