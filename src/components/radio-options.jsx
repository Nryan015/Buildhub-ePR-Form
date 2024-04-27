import "../styles/style.css";
import RadioOptionInput from "./radio-option-input";
import Attachment from "./attachment";

function RadioOptions(props) {
  return (
    <div className="radio-options">
      <RadioOptionInput labelText="Purchase Description" />
      <RadioOptionInput labelText="Remarks" />
      <RadioOptionInput labelText="Quantity" />
      <RadioOptionInput labelText="Estimated Price" />
      <RadioOptionInput labelText="Estimated Cost" />
      <Attachment labelText="Attachment" />
      <Attachment labelText="File Upload" />
    </div>
  );
}

export default RadioOptions;
