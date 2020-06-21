import React from "react";

export const PrintComponent = ({ client }) => (
  <p className="clientName">
    {client.name}: {client.phone}
  </p>
);
