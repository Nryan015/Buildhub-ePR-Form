// SetTotalCostInput.jsx
import React from "react";
import "../styles/style.css";

function SetTotalCostInput({ title, labelText, value }) {
  return (
    <div>
      <h4>{title}</h4>
      <input
        type="text"
        className="radio-options-inputs"
        placeholder={labelText}
        readOnly={true}
        value={value}
      />
    </div>
  );
}

export default SetTotalCostInput;
