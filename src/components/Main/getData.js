import img1 from "../../assets/images/phone/img1.webp";
import imgOne2 from "../../assets/images/phone/img1-2.webp";
import imgFour1 from "../../assets/images/phone/image4-1.webp";
import img2 from "../../assets/images/phone/img2.webp";
import img3 from "../../assets/images/phone/img3.webp";
import img4 from "../../assets/images/phone/img4.webp";
import img5 from "../../assets/images/phone/img5.webp";
import img6 from "../../assets/images/phone/img6.webp";

import camera from "../../assets/images/phone/camera.webp";
import star from "../../assets/images/phone/yildiz.webp";
import greenStar from "../../assets/images/phone/greenStar.webp";
import topSeller from "../../assets/images/phone/topSeller.webp";
import { FaShippingFast } from "react-icons/fa";
import { AiFillCodepenSquare } from "react-icons/ai";
const getData = () => {
  const s = [
    {
      image: img5,
      camera: camera,
      star: star,
      title: "Apple",
      desc: "iPhone 11 64 GB Siyah Cep Telefonu",
      price: "16498,99",
      viewer: "5869",
      state: "Son 14 Günün En Düşük Fiyati!",
      fast: <FaShippingFast />,
      teslimat : 'Hızlı Teslimat'
    },
    {
      image: imgOne2,
      camera: camera,
      star: topSeller,
      title: "Apple",
      desc: "iPhone 11 128 GB Siyah Cep Telefonu",
      price: "17999",
      viewer: "4853",
      state: "Son 14 Günün En Düşük Fiyati!",
      fast: <FaShippingFast />,
      teslimat : "Hızlı Teslimat"
    },
    {
      image: img3,
      camera: camera,
      star: greenStar,
      title: "Samsung",
      desc: "Galaxy A32 128 GB Mavi Cep Telefonu",
      price: "7198.99",
      viewer: "1541",
      fast: <FaShippingFast />,
      teslimat : "Hızlı Teslimat"
    },
    {
      image: imgFour1,
      camera: camera,
      star: star,
      title: "Apple",
      desc: "iPhone 11 64 GB Beyaz Cep Telefonu",
      price: "16796",
      viewer: "8612",
      state: "Son 14 Günün En Düşük Fiyati!",
      cargo: <AiFillCodepenSquare />,
      cargoText : "Cargo Bedava",
      fast: <FaShippingFast />,
      teslimat : "Hızlı Teslimat"
    },
    {
      image: img2,
      camera: camera,
      star: topSeller,
      title: "Xiaomi",
      desc: "Redmi Note 11 Pro 8GB+128 GB Gri Cep Telefonu",
      price: "8390",
      viewer: "373",
      state: "Son 30 Günün En Düşük Fiyati!",
      fast: <FaShippingFast />,
      teslimat : "Hızlı Teslimat"
    },
    {
      image: img1,
      camera: camera,
      star: star,
      title: "Xiaomi",
      desc: "Redmi Note 11 4 GB+64 GB Akıllı Cep Telefonu",
      price: "7.452",
      viewer: "721",
      state: "Son 30 Günün En Düşük Fiyati!",
      cargo: <AiFillCodepenSquare />,
      cargoText : "Cargo Bedava",
      fast: <FaShippingFast />,
      teslimat : "Hızlı Teslimat"
    },

    {
      image: img4,
      camera: camera,
      title: "Apple",
      desc: "iPhone 11 128 GB Beyaz Cep Telefonu",
      price: "18.990",
      viewer: "6107",
    },
    {
      image: img6,
      camera: camera,
      star: star,
      title: "Xiaomi",
      desc: "Redmi Note 11 6GB+128 GB Akıllı Cep Telefonu",
      price: "6.749",
      viewer: "121",
      cargo: <AiFillCodepenSquare />,
      cargoText : "Cargo Bedava",
      fast: <FaShippingFast />,
      teslimat : "Hızlı Teslimat"
    },
  ];
  var data = s.sort(func);

  function func(a, b) {
    return 0.5 - Math.random();
  }

  return data;
};
export default getData;
