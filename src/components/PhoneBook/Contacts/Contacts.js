import React from "react";
import { BntFormDelete } from "../Buttons/BntFormDelete";
import { ContactListItem } from "./ContactListItem";





export const ContactList = ({ data: { clients }, onDelComponent }) => {
  if (!clients.length) {alert('Enter first name')}

  return (clients.length)&&(clients.map((client) => (
    <div className="contactList" key={client.id}>
      <ContactListItem client={client} />
      <BntFormDelete client={client} onDelComponent={onDelComponent}/>
    </div>
  )))
};
