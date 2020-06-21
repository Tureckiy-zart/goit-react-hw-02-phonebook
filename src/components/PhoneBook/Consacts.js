import React from "react";
import { PrintComponent } from "./PrintComponent";

export const Consacts = ({ onPrintConstacts }) => {
  return (
    <>
      <div className="contactList">
        Contact: {onPrintConstacts()}
        {/* <button onClick={() => delComponent(id)}>delete</button> */}
      </div>
    </>
  );
};
