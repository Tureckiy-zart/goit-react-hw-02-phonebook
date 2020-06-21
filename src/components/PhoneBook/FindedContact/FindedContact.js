import React from "react";
import { Consacts } from "../Consacts";

export const FindedContact = ({
  onfilterClient,
  value,
  onPrintFilteredComponents,
}) => (
  //  console.log('onPrintFilteredComponents', onPrintFilteredComponents)
  <>
    <input
      type="text"
      onChange={onfilterClient}
      placeholder={"Enter name to Saerch..."}
      value={value}
    />
    {/* <Consacts onPrintFilteredComponents={data} /> */}
    <div></div>
  </>
);
