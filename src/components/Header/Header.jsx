import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/">Laboratory</Link>
      </div>
      <div className={style.headerLogin}>
        <AiOutlineUser /> <Link to={"login"}>Login</Link>
      </div>
    </header>
  );
};

export default Header;
