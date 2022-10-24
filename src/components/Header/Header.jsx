import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth, useAuthActions } from "../Context/AuthProvider";
import { logoutService } from "../../Services/logoutService";
import { toast } from "react-toastify";
const Header = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const setAuth = useAuthActions();

  const logoutHandler = async () => {
    try {
      const res = await logoutService();
      setAuth(false);
      toast.warning(res.data.message.text)
      navigate("/");
      window.location.reload()
    } catch (error) {

    }
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/">Laboratory</Link>
      </div>
      <div className={style.headerLogin}>
        <AiOutlineUser />
        {auth ? (
          <span onClick={logoutHandler}>logout</span>
        ) : (
          <Link to={"login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
