import React from "react";

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
        {/* <ContactList data={ filteredClients} /> */}
      </div>
    </>
  );
};
