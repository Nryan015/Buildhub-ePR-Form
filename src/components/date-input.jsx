import "../styles/style.css";

function DateInput(props) {
  const { labelText } = props;
  return (
    <div>
      <label className="form-track__label">{labelText}</label>
      <input type="datetime-local" className="form-track__input required" />
    </div>
  );
}

export default DateInput;
