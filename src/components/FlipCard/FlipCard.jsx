import React from "react";
import "./FlipCard.css";
import chip from "./../../images/chip.png";
import amex from "./../../images/amex.png";

const FlipCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="front-inner">
            <div className="front-section fs-1">
              <img src={chip} alt="credit card chip" style={{ width: 55 }} />
              <img src={amex} alt="credit card logo" style={{ width: 125 }} />
            </div>
            <div className="front-section fs-2 pt-2">
              <p>####</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
            </div>
            <div className="front-section fs-3">
              <div className="fs-3-top">
                <p>Card Holder</p>
                <p>Expires</p>
              </div>
              <div className="fs-3-bot">
                <p className="name">MARCOS HINOJOS</p>
                <p className="exp">12/23</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <p>back</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
