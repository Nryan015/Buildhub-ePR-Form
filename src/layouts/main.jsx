import "../styles/style.css";
import DateInput from "../components/date-input";
import TextInput from "../components/text-input";
import Dropdown from "../components/dropdown";
import Checkbox from "../components/checkbox";
import RadioOptions from "../components/radio-options";
import Signature from "../components/signature";

function Main(props) {
  const { formTitle } = props;

  const companies = [
    "Firmus Cement Trading Corp",
    "Starport Cement Trading Inc",
    "Top Armada Cement Corporation",
    "Buildmart PH Technologies",
  ];

  const selectDropdowns = ["Item Purchase", "Service Purchase"];
  return (
    <main className="container">
      <section className="form-box form-box--transparent">
        <form className="form-track">
          <h2 className="form-track__heading heading-2">{formTitle}</h2>
          <div className="form-track__block">
            <DateInput labelText="Date-Time" />
            <TextInput labelText="Requested By: (First Name, Last Name)" />
            <Dropdown labelText="Select Company" options={companies} />
            <TextInput labelText="Recommended Supplier" />
            <Checkbox labelText="Urgent" />
            <DateInput labelText="Date Needed" />
            <Dropdown
              labelText="Type of Purchase Request"
              options={selectDropdowns}
            />
            <RadioOptions />
            <TextInput labelText="Total Cost of Item Purchase" />
            <Signature labelText="Signature" />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Main;
