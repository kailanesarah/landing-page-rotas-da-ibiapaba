import NavBar from "./navBar";
import LogoRotas from "./logo";
import ButtonRegister from "../buttonRegister";
import "../../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <LogoRotas />
      <NavBar />
      <div className="access-links">
        <u>
          <a href="/login">Área do cliente</a>
        </u>
        <ButtonRegister />
      </div>
    </header>
  );
};

export default Header;
