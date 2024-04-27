import "../styles/style.css";
import BuildHubLogo from "../images/buildhub-logo.png";
import CurrentLocation from "./header-components/current-location";
import FormSearch from "./header-components/form-search";
import NavBar from "./header-components/navbar";

function Header2nd() {
  return (
    <header className="header" id="head_2nd_layer">
      <a href="index.html" className="logo-link">
        <img src={BuildHubLogo} alt="Logo" className="logo" />
      </a>
      {/* <CurrentLocation userAddress="Jimboy Reyes" /> */}
      {/* <FormSearch />
      <NavBar fullName="Jimboy Reyes" isLoggedIn="true" /> */}
    </header>
  );
}

export default Header2nd;
