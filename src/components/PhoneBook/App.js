import React, { Component } from "react";
// import sytles from "./Phonebook.module.css";
import { Form } from "./Form";
import { ContactList } from "./Consacts";
// import { ContactListItem } from "./ContactListItem";
import { FindedContact } from "./FindedContact/FindedContact";
// import { BntFormDelete } from "./BntFormDelete";
// const {} = sytles;

const userSelector = (clients, filter) =>
  clients.filter((client) => client.name.toLowerCase().includes(filter));
// client.name.toLowerCase().includes(filter.toLowerCase()));

export class App extends Component {
  state = {
    clients: [
      { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
      { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
    ],
    filter: [],
  };

  contactsVerification = (clients) => {
    console.log('clients', clients)
    return clients.some(
      client => client.name === this.state.name,
    );
  };

  
  filterClient = ({ target: { value } }) => {
    this.setState({ filter: value });
  };
  getClientData = (client) => {
    this.setState((prev) => ({ clients: [...prev.clients, client] }));
  };

  delComponent = (id) =>
    this.setState((prev) => ({
      clients: prev.clients.filter((client) => client.id !== id),
    }));
  // contactsVerification = (client) => clients.some((client) => client.name === [name]);

  render() {
    const { clients, filter } = this.state;
    const filteredClients = userSelector(clients, filter);
    // console.log("filteredClients", filteredClients);
    return (
      <>
        <Form getClientData={this.getClientData} onContactsVerification={this.contactsVerification}/>
        <ContactList data={this.state} onDelComponent={this.delComponent} />
        <FindedContact
          onfilterClient={this.filterClient}
          value={filter}
          filteredClients={filteredClients}
        />
      </>
    );
  }
}
