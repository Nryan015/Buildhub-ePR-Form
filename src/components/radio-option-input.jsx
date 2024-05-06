import { useState } from "react";
import "../styles/style.css";

function RadioOptionInput(props) {
  const { labelText, onChange } = props;
  const [value, setValue] = useState(""); 

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue); 
    }
  };

  return (
    <input
      type="text"
      className="radio-options-inputs"
      placeholder={labelText}
      value={value} 
      onChange={handleChange}
    />
  );
}

export default RadioOptionInput;
