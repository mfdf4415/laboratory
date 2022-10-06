import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import style from "./Descreaption.module.css";

const Descreaption = () => {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);

  const uploadImgHandler = (e, set) => {
    console.log(e.target.files[0]);
    set(e.target.files[0]);
  };

  return (
    <section className={style.descreaptionContainer}>
      <div className={style.desceaptionHeader}>
        <h1>Descreaption</h1>
      </div>
      <form>
        <div className={style.formRowDesc}>
          <label>Experiment Description:</label>
          <textarea name="" id="" cols="30" rows="7"></textarea>
        </div>
        <div className={style.formRowImg}>
          <div className={style.imgContainer}>
            <input
              type="file"
              onChange={(e) => uploadImgHandler(e, setImage)}
            />
            {/* <AiOutlinePlus onClick={uploadImgHandler} /> */}
            {image ? <img src={URL.createObjectURL(image)} /> : ""}
          </div>
          <div className={style.imgContainer}>
            <input
              type="file"
              onChange={(e) => uploadImgHandler(e, setImage2)}
            />
            {/* <AiOutlinePlus onClick={uploadImgHandler} /> */}
            {image2 ? <img src={URL.createObjectURL(image2)} /> : ""}
          </div>
        </div>
        <button>Send</button>
      </form>
    </section>
  );
};

export default Descreaption;
