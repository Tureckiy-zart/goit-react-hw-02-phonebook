import React from "react";
import { ContactListItem } from "./ContactListItem";

export const ContactList = ({ data: { clients }, onDelComponent }) => {
  // if (!clients.length) {alert('Enter first name')}/

  return clients.length ? (
    clients.map((client) => (
      // return (clients.map((client) => (
      <div className="contactList" key={client.id}>
        <ContactListItem client={client} onDelComponent={onDelComponent} />
      </div>
    ))
  ) : (
    <div className="contactList">
      <p>Contacts is not available</p>
    </div>
  );
};
