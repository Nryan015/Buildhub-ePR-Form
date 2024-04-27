import "../styles/style.css";
import DateInput from "../components/date-input";

function Main(props) {
  const { formTitle } = props;
  return (
    <main className="container">
      <section className="form-box form-box--transparent">
        <form className="form-track">
          <h2 className="form-track__heading heading-2">{formTitle}</h2>
          <div className="form-track__block">
            <DateInput labelText="Date-Time" />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Main;
