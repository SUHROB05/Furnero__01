import React, { useState } from "react";
import "./Card.scss";

import ShopCardImg from "../../assets/imgs/shop/card-img1.svg";

const Card = ({ id }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  let s = 2;
  const handleClick = () => {
    if (s % 2 === 0) {
      setShowOverlay(true);
      s++;
    } else {
      setShowOverlay(false);
      s++;
    }

    setTimeout(() => {
      setShowOverlay(false);
    }, 5000);
  };

  return (
    <div className="shop__card" onClick={handleClick}>
      <div className='shop__card-body'>
        <div className="shop__card-img">
          <img src={ShopCardImg} alt="" />
          <div className="chegirma">-50%</div>
        </div>
        <div className="shop__card-text">
          <p className="p-text1">Respira</p>
          <p className="p-text2">Outdoor bar table and stool</p>
          <p className="p-text3">Rp 500.000
            <span></span>
          </p>
        </div>
      </div>
      {/* <p>Card {id}</p> */}
      {showOverlay && <div className="shop__overlay" onClick={handleClick}>Clicked!</div>}
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="shop__card-container">
      {Array.from({ length: 4 }, (_, index) => (
        <Card />
      ))}
    </div>
  );
};

export default CardContainer;
