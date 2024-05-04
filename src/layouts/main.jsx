// Main.jsx
import React, { Component } from "react";
import "../styles/style.css";
import DateInput from "../components/date-input";
import TextInput from "../components/text-input";
import Dropdown from "../components/dropdown";
import Checkbox from "../components/checkbox";
import RadioOptions from "../components/radio-options";
import Signature from "../components/signature";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urgent: "No", // Initial state for the urgent checkbox
      totalEstimatedCost: 0, // Initial state for the total estimated cost
    };
  }

  componentDidMount() {
    console.log("Main component mounted");
  }

  handleCheckboxChange = (event) => {
    this.setState({ urgent: event.target.value });
  };

  handleTotalEstimatedCostChange = (totalEstimatedCost) => {
    this.setState({ totalEstimatedCost });
  };

  render() {
    const { formTitle } = this.props;
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
              <Checkbox
                labelText="Urgent"
                value={this.state.urgent}
                onChange={this.handleCheckboxChange}
              />
              <DateInput labelText="Date Needed" />
              <Dropdown
                labelText="Type of Purchase Request"
                options={selectDropdowns} 
              />
              <RadioOptions onTotalEstimatedCostChange={this.handleTotalEstimatedCostChange} />
              <Signature labelText="Signature" />
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default Main;
