import "../styles/style.css";

function RadioOptionInput(props) {
  const { labelText } = props;
  return (
    <input
      type="text"
      className="radio-options-inputs"
      placeholder={labelText}
    />
  );
}

export default RadioOptionInput;
