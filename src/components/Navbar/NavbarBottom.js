import React from "react";

const NavbarBottom = () => {
  const data = [
    "KADIN",
    "ERKEK",
    "ANNE % ÇOCUK",
    "EV & MOBİLYA",
    "SÜPERMARKET",
    "KOZMETİK",
    "AYAKKABI & ÇANTA",
    "SAAT & AKSESUAR",
    "ELEKTRONİK",
    "SPORT&OUTDOOR",
  ];
  return (
    <>
      <div className="wrapper-part">
        <div className="wrapper-first-child">
          {data.map((item, index) => (
            <div key={index} className="wrapper-items">{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarBottom;
