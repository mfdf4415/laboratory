import style from "./ReservExperiment.module.css";
import { AiFillFilePdf } from "react-icons/ai";

const ReservExpriment = () => {
  return (
    <section className={style.resrvContainer}>
      <form className={style.reservForm}>
        <div className={style.formRow}>
          <label>Please Enter your Experiment Title:*</label>
          <input type="text" />
        </div>
        <div className={style.formRow}>
          <label>Required Information:*</label>
          <textarea type="text" rows="6" className={style.textArea} />
        </div>
        <div className={style.formRow}>
          <label>I need the support of the lab manager:</label>
          <select name="" id="">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={style.formRowFile}>
          <p>
            Please download and review the Safety Information and Laboratory
            Protocols.
          </p>
          <div className={style.pdf}>
            <AiFillFilePdf />
            <AiFillFilePdf />
            <AiFillFilePdf />
          </div>
        </div>
        <div className={style.formRowCheckBox}>
          <input type="checkbox" />
          <label>
            I have read and agree to the logs and security information.*
          </label>
        </div>
        <button type="submit" className={style.btn}>
          Reservation
        </button>
      </form>
    </section>
  );
};

export default ReservExpriment;
