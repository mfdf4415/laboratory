import style from "./LaboratoryDate.module.css";
import { Link } from "react-router-dom";

const LaboratoryDate = () => {
  return (
    <section className={style.laboratorysDateContainer}>
      <div className={style.listTitle}>
        <p>pleas select date and time</p>
      </div>
      <div className={style.laboratorysDate}>
        <div className={style.laboratorysDateItem}>
          <div className={style.date}>09.05.23</div>
          <div className={style.times}>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
          </div>
        </div>
        <div className={style.laboratorysDateItem}>
          <div className={style.date}>09.05.23</div>
          <div className={style.times}>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
          </div>
        </div>
        <div className={style.laboratorysDateItem}>
          <div className={style.date}>09.05.23</div>
          <div className={style.times}>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
            <span>8 - 9</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaboratoryDate;
