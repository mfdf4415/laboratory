import style from "./ShowImage.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ShowImage = ({ img, setShow, show }) => {
  return (
    <div className={show ? style.showImgContainer : style.hideImgContainer}>
      <div className={style.showImgBox}>
        <img src={img} alt="" />
      </div>
      <AiOutlineCloseCircle onClick={setShow} />
    </div>
  );
};

export default ShowImage;
