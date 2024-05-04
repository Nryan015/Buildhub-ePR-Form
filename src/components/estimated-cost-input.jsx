// TotalCostInput.jsx
import React from "react";
import "../styles/style.css";

function TotalCostInput({ labelText, value }) {
  return (
    <input
      type="text"
      className="radio-options-inputs"
      placeholder={labelText}
      readOnly={true}
      value={value}
    />
  );
}

export default TotalCostInput;
