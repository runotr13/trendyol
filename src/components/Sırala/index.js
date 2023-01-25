import React from "react";

const Sirala = ({ setOpenModal }) => {
  const items = [
    { id: 1, label: "Önerilen" },
    { id: 2, label: "En Düşük Fiyat" },
    { id: 3, label: "En Yüksek Fiyat" },
    { id: 4, label: "Çok Satanlar" },
  ];
  return (
    <>
      <div className="Modal">
        <div className="overlay">
          <div className="modal">
            <div className="title-wrapper-modal">
              <button type="button" onClick={() => setOpenModal(false)}>
                Kapat
              </button>
              <p>Sıralama</p>
              <button type="button">Seç</button>
            </div>
            <div className="dropdown">
              {items.map((item) => (
                <div key={item.id}>
                  <p>{item?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sirala;
