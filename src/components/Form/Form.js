import React, { Component } from "react";
import shortID from "shortid";

// import sytles from "./Phonebook.module.css";
import { InputForm } from "./InputForm";
import config from "../config.json";
import { BntFormSubmit } from "../Buttons/BntFormSubmit";

// const {} = sytles;
const initialState = {
  name: "",
  phone: "",
  password: "",
  gender: "",
};

export class Form extends Component {
  state = { ...initialState };


  // contactsVerification = (clients) =>
  // clients.some((client) => client.name === this.state.name);

  handleSubmit = (event) => {
    event.preventDefault();
    const client = {
      ...this.state,
      date: new Date().toDateString(),
      id: shortID(),
    };

    // if (this.state.name !== "" && this.state.phone !== "" )
    if (this.props.onContactsVerification )
    // &&    (this.props.contactsVerification))
    {
      this.props.getClientData(client);
    }
    // this.resetForm();
    this.setState(initialState);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  // resetForm = () => {
  //   this.setState(
  //     {
  //       name: "",
  //       password: "",
  //       gender: "",
  //       phone: "",
  //     },
  //     () => console.log(this.state)
  //   );
  // };

  render() {
    // console.log("re-render");
    console.log('this.stateonContactsVerification', this.props.onContactsVerification)
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ width: 300, border: "2px dotted white" }}
      >
        <InputForm
          handleChange={this.handleChange}
          value={this.state.name}
          config={config.inputName}
        />
        <InputForm
          handleChange={this.handleChange}
          value={this.state.phone}
          config={config.inputPhone}
        />

        <label>
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <BntFormSubmit />
      </form>
    );
  }
}