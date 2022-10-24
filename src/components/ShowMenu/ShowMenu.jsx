import { BiMenu } from "react-icons/bi";
import style from "./ShowMenu.module.css";

const ShowMenu = ({ setShow, show }) => {
  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div className={style.showMenu}>
      <div onClick={showHandler}>
        <BiMenu  /> Show menu 
      </div>
      
    </div>
  );
};

export default ShowMenu;
