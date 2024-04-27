import "../styles/style.css";

function Dropdown(props) {
  const { labelText, options } = props;

  return (
    <div>
      <label className="form-track__label">{labelText}</label>
      <select className="form-track__input">
        {options.map((company, index) => (
          <option key={index} value={company}>
            {company}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
