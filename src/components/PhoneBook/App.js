import React, { Component } from "react";
import { Form } from "./Form/Form";
import { FindedContact } from "./FindedContact/FindedContact";
import { ContactList } from "./Contacts/Contacts";

const userSelector = (clients, filter) =>
  clients.filter((client) =>
    client.name.toLowerCase().includes(filter.toLowerCase())
  );
export class App extends Component {
  state = {
    clients: [
      { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
      { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
    ],
    filter: "",
  };

  filterClient = ({ target: { value } }) => {
    this.setState({ filter: value });
  };
  addClientData = (client) => {
    this.setState((prev) => ({ clients: [...prev.clients, client] }));
  };
  delComponent = (id) =>
    this.setState((prev) => ({
      clients: prev.clients.filter((client) => client.id !== id),
    }));

  render() {
    const { clients, filter } = this.state;
    const filteredClients = userSelector(clients, filter);
    return (
      <>
        <Form addClientData={this.addClientData} clients={clients} />
        <ContactList data={this.state} onDelComponent={this.delComponent} />
        <FindedContact
          onfilterClient={this.filterClient}
          value={filter}
          filteredClients={filteredClients}
          onDelComponent={this.delComponent}
        />
      </>
    );
  }
}
