import React from "react";
import { ContactList } from "../Contacts/Contacts";

export const FindedContact = ({
  onfilterClient,
  value,
  filteredClients,
  // delComponent,
}) => {
  console.log("filteredClients", filteredClients);
  console.log("filteredClients", typeof filteredClients);
  return (
    <>
      <input
        type="text"
        onChange={onfilterClient}
        placeholder={"Enter name to Saerch..."}
        value={value}
      />
      <div>
        <ContactList data={{ clients: filteredClients }} 
        // onDelComponent={onDelComponent}
        />
      </div>
    </>
  );
};
