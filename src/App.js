import React, { Component } from "react";
import "./App.css";
import CreditCardForm from "./components/CreditCardForm/CreditCardForm";
import FlipCard from "./components/FlipCard/FlipCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      logo: "amex",
      name: " ",
      expMnth: "00",
      expYear: "00",
      cvv: " ",
      isCardFlipped: false,
      ccNumber: "#### #### #### ####",
    };
  }

  onNumberChange = (event) => {
    let cardNumber = event.target.value;
    // if (cardNumber.length === 4) {
    //   cardNumber.concat(" ");
    // }
    this.setState({ ccNumber: cardNumber });
  };
  onNameChange = (event) => {
    this.setState({ name: event.target.value.toUpperCase() });
  };
  onMonthChange = (event) => {
    this.setState({ expMnth: event.target.value });
  };
  onYearChange = (event) => {
    if (event.target.value === "Year") {
      return this.setState({ expYear: "00" });
    }
    this.setState({ expYear: event.target.value.slice(2) });
  };
  onCvvChange = (event) => {
    this.setState({ cvv: event.target.value });
  };
  onCvvFocus = () => {
    this.setState({ isCardFlipped: true });
  };
  onNotCvvFocus = () => {
    this.setState({ isCardFlipped: false });
  };

  render() {
    return (
      <div className="App d-flex flex-column justify-content-center align-items-center bg-light">
        <FlipCard
          name={this.state.name}
          month={this.state.expMnth}
          year={this.state.expYear}
          cvv={this.state.cvv}
          cardNum={this.state.ccNumber}
          isCardFlipped={this.state.isCardFlipped}
        />
        <CreditCardForm
          onNumberChange={this.onNumberChange}
          onNameChange={this.onNameChange}
          onMonthChange={this.onMonthChange}
          onYearChange={this.onYearChange}
          onCvvFocus={this.onCvvFocus}
          onNotCvvFocus={this.onNotCvvFocus}
          onCvvChange={this.onCvvChange}
        />
      </div>
    );
  }
}

export default App;
