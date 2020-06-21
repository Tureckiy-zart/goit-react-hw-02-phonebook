import React from "react";
import { ContactListItem } from "./ContactListItem";
import { BntFormDelete } from "./BntFormDelete";





export const ContactList = ({ data: { clients }, onDelComponent }) => {
  if (!clients.length) {alert('Enter first name')}

  return (clients.length)&&(clients.map((client) => (
    <div className="contactList" key={client.id}>
      <ContactListItem client={client} />
      <BntFormDelete client={client} onDelComponent={onDelComponent}/>
    </div>
  )))
};
