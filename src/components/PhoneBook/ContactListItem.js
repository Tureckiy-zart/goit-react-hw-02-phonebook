import React from "react";



export const ContactListItem = ({ client }) => (
  <p className="clientName">
    {client.name}: {client.phone}
  </p>
);
