import React, { Component } from "react";
import sytles from "./Phonebook.module.css";
import { Form } from "./Form";
import { Consacts } from "./Consacts";
import { PrintComponent } from "./PrintComponent";
import { FindedContact } from "./FindedContact/FindedContact";
// import { BntFormDelete } from "./BntFormDelete";
const {} = sytles;

const userSelector = (clients, filter) =>
  clients.filter((client) =>
    client.name.toLowerCase().includes(filter));
    // client.name.toLowerCase().includes(filter.toLowerCase()));

export class App extends Component {
  state = {
    clients: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: [],
  };

  filterClient = ({target:{value}}) => {
    this.setState({ filter: value });
  };
  getClientData = (client) => {
    this.setState((prev) => ({ clients: [...prev.clients, client] }));
  };

  addComponents = () =>
    this.state.clients.map((client) => (
      <div key={client.id}>
        <PrintComponent client={client} />
        <button onClick={() => this.delComponent(client.id)}>Delete</button>
      </div>
    ));
  printFilteredComponents = () =>
    this.state.clients.map((client) => (
      <div key={client.id}>
        <PrintComponent client={client} />
        <button onClick={() => this.delComponent(client.id)}>Delete</button>
      </div>
    ));
  // findClient = () => {
  //   this.state.clients.filter((client) => (
  //     <PrintComponent client={client.name} />
  //   ));
  // };

  delComponent = (id) =>
    this.setState((prev) => ({
      clients: prev.clients.filter((client) => client.id !== id),
    }));

  render() {
const {clients, filter} =this.state
    const filteredClients = userSelector(clients, filter)
    console.log('filteredClients', filteredClients)
    return (
      <>
        <Form getClientData={this.getClientData} />
        <Consacts onPrintConstacts={this.addComponents} />
        <FindedContact
          onfilterClient={this.filterClient}
          value={filter}
          printFilteredComponents={this.printFilteredComponents}
        />
      </>
    );
  }
}
