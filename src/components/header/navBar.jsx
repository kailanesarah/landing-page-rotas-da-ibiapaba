import "../../css/components/header.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="/home">Início/Home</a>
        </li>
        <li>
          <a href="/solutions">Nossas soluções</a>
        </li>
        <li>
          <a href="/about">Sobre nós</a>
        </li>
        <li>
          <a href="/security">Segurança</a>
        </li>
        <li>
          <a href="/questions">Perguntas</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
