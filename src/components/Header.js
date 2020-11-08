import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

function Header(props) {
  let location = useLocation().pathname;
  const [linkLog, setLinkLog] = React.useState("/sign-in");
  const [position, setPosition] = React.useState("");
  const { loggedIn, onLogOut, email } = props;

  React.useEffect(() => {
    if (location === "/sign-up") {
      setLinkLog("/sign-in");
      setPosition("Войти");
    } else {
      setLinkLog("/sign-up");
      setPosition("Регистрация");
    }
  }, [location]);

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип" />
      {loggedIn ? (
        <div className="header__info">
          <p className="header__email">{email}</p>
          <button className="header__button-logout" onClick={onLogOut}>
            Выйти
          </button>
        </div>
      ) : (
        <Link className="header__button-switch" to={linkLog}>
          {position}
        </Link>
      )}
    </header>
  );
}

export default Header;
