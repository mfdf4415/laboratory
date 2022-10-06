import style from "./ExperimentsList.module.css";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const ExperimentsList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/experiments/1");
  };
  return (
    <section className={style.experimentsList}>
      <div className={style.experimentsListHeader}>
        <h1>Title of Home</h1>
        <Link to="/reservation">
          <AiOutlinePlus />
        </Link>
      </div>
      <div onClick={handleClick} className={style.experiments}>
        <div className={style.experiment}>
          <h3>Laboratory name</h3>
          <h2>Experiment Title</h2>
          <div className={style.experimentBottom}>
            <p>24.07.2022 12:30 - 15:000</p>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
      <div onClick={handleClick} className={style.experiments}>
        <div className={style.experiment}>
          <h3>Laboratory name</h3>
          <h2>Experiment Title</h2>
          <div className={style.experimentBottom}>
            <p>24.07.2022 12:30 - 15:000</p>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
      <div onClick={handleClick} className={style.experiments}>
        <div className={style.experiment}>
          <h3>Laboratory name</h3>
          <h2>Experiment Title</h2>
          <div className={style.experimentBottom}>
            <p>24.07.2022 12:30 - 15:000</p>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
      <div onClick={handleClick} className={style.experiments}>
        <div className={style.experiment}>
          <h3>Laboratory name</h3>
          <h2>Experiment Title</h2>
          <div className={style.experimentBottom}>
            <p>24.07.2022 12:30 - 15:000</p>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
      <div onClick={handleClick} className={style.experiments}>
        <div className={style.experiment}>
          <h3>Laboratory name</h3>
          <h2>Experiment Title</h2>
          <div className={style.experimentBottom}>
            <p>24.07.2022 12:30 - 15:000</p>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperimentsList;
