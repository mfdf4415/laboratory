import style from "./ShowImage.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ShowImage = ({ img, setShow, show }) => {
  console.log(img);
  return (
    <div className={show ? style.showImgContainer : style.hideImgContainer}>
      <AiOutlineCloseCircle onClick={setShow} />
      <div className={style.showImgBox}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ShowImage;
