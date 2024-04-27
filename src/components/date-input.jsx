import "../styles/style.css";

function DateInput(props) {
  const { labelText } = props;
  return (
    <>
      <label className="form-track__label">{labelText}</label>
      <input type="datetime-local" className="form-track__input required" />
    </>
  );
}

export default DateInput;
