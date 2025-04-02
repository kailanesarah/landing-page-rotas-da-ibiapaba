import NavBar from "./navBar";
import LogoRotas from "./logo";
import ButtonRegister from "../buttonRegister";
import "../../css/components/header.css";

const Header = () => {
  return (
    <header className="header">
      <LogoRotas />
      <NavBar />
      <div className=" gap-4 w-auto items-center hidden md:flex flex-row">
        <u>
          <a href="/login">Área do cliente</a>
        </u>
        <ButtonRegister />
      </div>


    </header>
  );
};

export default Header;
