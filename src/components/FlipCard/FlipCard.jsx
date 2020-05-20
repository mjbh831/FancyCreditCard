import React, { Fragment } from "react";
import "./FlipCard.css";
import chip from "./../../images/chip.png";
import amex from "./../../images/amex.png";

const FlipCard = ({ name, month, year, cvv, isCardFlipped, cardNum }) => {
  const makeTwoDigits = (data) => {
    if (data.length === 1) {
      return "0" + data;
    }
    return data;
  };

  let cardInfo = (
    <Fragment>
      <div className="flip-card-front">
        <div className="front-inner">
          <div className="front-section fs-1">
            <img src={chip} alt="credit card chip" style={{ width: 55 }} />
            <img src={amex} alt="credit card logo" style={{ width: 125 }} />
          </div>
          <div className="front-section fs-2 pt-2">
            <div className="ccNums">{cardNum}</div>
          </div>
          <div className="front-section fs-3">
            <div className="fs-3-top">
              <p>Card Holder</p>
              <p>Expires</p>
            </div>
            <div className="fs-3-bot">
              <p className="name">{name}</p>
              <div className="exp">
                <p className="expMnth">{makeTwoDigits(month)}</p>
                <p id="slash">/</p>
                <p className="expYear">{year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flip-card-back">
        <div className="mag-strip"></div>
        <p>CVV</p>
        <div className="sig-strip">{cvv}</div>
        <img id="back-logo" src={amex} alt="credit card logo" />
      </div>
    </Fragment>
  );

  const flipOverCard = () => {
    if (isCardFlipped) {
      return (
        <div
          className="flip-card-inner"
          style={{ transform: "rotateY(180deg)" }}
        >
          {cardInfo}
        </div>
      );
    }
    return <div className="flip-card-inner">{cardInfo}</div>;
  };

  return <div className="flip-card">{flipOverCard()}</div>;
};

export default FlipCard;
