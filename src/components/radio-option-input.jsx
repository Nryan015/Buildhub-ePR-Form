import { useState } from "react";
import "../styles/style.css";

function RadioOptionInput(props) {
  const { labelText, onChange } = props;
  const [value, setValue] = useState(""); // State to hold the input value

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue); // Update the state with the new value
    if (onChange) {
      onChange(newValue); // Call the onChange handler if provided
    }
  };

  return (
    <input
      type="text"
      className="radio-options-inputs"
      placeholder={labelText}
      value={value} // Bind the value to the state
      onChange={handleChange} // Call handleChange function on change
    />
  );
}

export default RadioOptionInput;
