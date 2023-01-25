import React, { useCallback, useEffect, useRef, useState } from "react";
import Filter from "./filter/Filter";
import Marka from "./marka/Marka";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import Sirala from "./Sırala";
const Home = () => {
  const myRef = useRef(null);
  const [y, setY] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [menuVisible, setMenuVisible] = useState(true);
  const [visible, setVisible] = useState("");
  const [openModal, setOpenModal] = useState("");
  useEffect(() => {
    myRef.current.addEventListener("touchmove", handleTouchMove);
  }, []);

  const handleTouchMove = useCallback(
    (event) => {
      setPrevY(y);
      setY(event.touches[0].clientY);
      if (prevY > y) {
        setMenuVisible(false);
      } else {
        setMenuVisible(true);
      }
    },
    [prevY, y]
  );
  console.log(openModal);
  return (
    <>
      {!visible ? (
        <>
          <Navbar menuVisible={menuVisible} setVisible={setVisible} setOpenModal={setOpenModal} />
          <Main myRef={myRef} handleTouchMove={handleTouchMove} />
          <div className="footer-relative">
            <Footer />
          </div>
          {openModal === "sirala" && <Sirala setOpenModal={setOpenModal} />}
        </>
      ) : (
        <>
          {visible === "filter" && <Filter setVisible={setVisible} />}
          {visible === "marka" && <Marka setVisible={setVisible} />}
        </>
      )}
    </>
  );
};

export default Home;
