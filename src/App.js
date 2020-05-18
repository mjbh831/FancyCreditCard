import React, { Component } from "react";
import "./App.css";
import CreditCardForm from "./components/CreditCardForm/CreditCardForm";
import FlipCard from "./components/FlipCard/FlipCard";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App d-flex flex-column justify-content-center align-items-center bg-light">
        <FlipCard />
        <CreditCardForm />
      </div>
    );
  }
}

export default App;
