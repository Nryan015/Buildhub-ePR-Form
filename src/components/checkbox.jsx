import React from "react";
import "../styles/style.css";

function Checkbox(props) {
  const { labelText } = props;
  const urgentOptions = ["Yes", "No"];

  return (
    <>
      <label className="form-track__label">{labelText}</label>
      <div className="checkbox-group">
        {urgentOptions.map((option, index) => (
          <div key={index} className="checkbox-wrapper">
            <input
              className="form-track__checkbox"
              value={option}
              id={`${option}${index}`}
              type="radio"
              name={labelText}
            />
            <label htmlFor={`${option}${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </>
  );
}

export default Checkbox;
