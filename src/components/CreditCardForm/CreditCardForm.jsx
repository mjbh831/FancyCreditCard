import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./CreditCardForm.css";

class CreditCardForm extends Component {
  render() {
    const months = [
      "Month",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const years = ["Year", 2020, 2021, 2022, 2023, 2024, 2025];

    const isNumber = (e) => {
      let keycode = e.keyCode;
      if (
        (keycode > 48 && keycode < 57) ||
        (keycode > 95 && keycode < 106) ||
        keycode === 32 ||
        keycode === 8 ||
        keycode === 9
      ) {
        return;
      }
      e.preventDefault();
    };

    return (
      <Form className="w-30 h-50 p-4 bg-white d-flex flex-column justify-content-end rounded">
        <div>
          <Form.Group>
            <Form.Label className="label text-left w-100">
              Card Number
            </Form.Label>
            <Form.Control
              type="text"
              onKeyDown={isNumber}
              onChange={this.props.onNumberChange}
              onFocus={this.props.onNotCvvFocus}
              maxLength="19"
              minLength="15"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label text-left w-100">Card Name</Form.Label>
            <Form.Control
              type="text"
              onChange={this.props.onNameChange}
              onFocus={this.props.onNotCvvFocus}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} md="9" controlId="formGridCity">
              <Form.Label className="label text-left w-100">
                Expiration Date
              </Form.Label>
              <div className="d-flex">
                <Form.Control
                  as="select"
                  custom
                  className="mr-3"
                  onChange={this.props.onMonthChange}
                  onFocus={this.props.onNotCvvFocus}
                >
                  {months.map((month, i) => (
                    <option key={month} value={i}>
                      {month}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control
                  as="select"
                  custom
                  onChange={this.props.onYearChange}
                  onFocus={this.props.onNotCvvFocus}
                >
                  {years.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="label text-left w-100">CVV</Form.Label>
              <Form.Control
                onChange={this.props.onCvvChange}
                onFocus={this.props.onCvvFocus}
                maxLength="4"
              />
            </Form.Group>
          </Form.Row>
          <Button className="w-100 submit" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

export default CreditCardForm;
