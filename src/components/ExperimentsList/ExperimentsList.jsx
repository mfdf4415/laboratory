import style from "./ExperimentsList.module.css";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getListOfResevation } from "../../Services/getListOfReservation";
import { toast } from "react-toastify";
import { timeStampToDate } from "../../utils/timeStampToDate";
import { deleteReservation } from "../../Services/deleteReservation";
import Loading from "../common/Loading/Loading";

const ExperimentsList = () => {
  const [experiments, setExperiments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const naigate = useNavigate();

  const handleNavigate = (e, id) => {
    e.preventDefault();
    naigate(`/experiments/${id}`);
  };

  const deleteHandler = async (e, exprId) => {
    e.stopPropagation();
    setLoading(true);
    try {
      const res = await deleteReservation(exprId);
      setLoading(false);
      fetchExperiments();
      toast.warning(res.data.message.text);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message.text);

    }
  };

  const fetchExperiments = async () => {
    try {
      const { data } = await getListOfResevation();
      setExperiments(data);
    } catch (err) {
      const { data } = err.response;
      setError(data);
    }
  };

  useEffect(() => {
    fetchExperiments();
  }, []);

  const renderExperiments = () => {
    let renderd;

    if (!experiments && !error) {
      renderd = (
        <section className={style.experimentsList}>
          <Loading />
        </section>
      );
    }

    if (error) {
      renderd = (
        <div className={style.alertContainer}>
          <p className={style.error}>
            error : {error.message.code}
            <br />
            {error.message.text}
          </p>
        </div>
      );
    }
    if (experiments && experiments.data.length !== 0 && !error) {
      renderd = (
        <section className={style.experimentsList}>
          {loading ? <Loading /> : ""}
          <div className={style.experimentsListHeader}>
            <h1>Title of Home</h1>
            <Link to="/reservation">
              <AiOutlinePlus />
            </Link>
          </div>
          {experiments.data.reservations.map((expr) => (
            <div
              onClick={(e) => handleNavigate(e, expr.id)}
              key={expr.id}
              className={style.experiments}
            >
              <div className={style.experiment}>
                <h3>{expr.laboratory.name}</h3>
                <h2 onClick={() => handleNavigate(expr.id)}>{expr.title}</h2>
                <div className={style.experimentBottom}>
                  <p>
                    {timeStampToDate(expr["start date-time"] * 1000)}
                    {timeStampToDate(expr["end date-time"] * 1000)}
                  </p>
                  <AiOutlineDelete onClick={(e) => deleteHandler(e, expr.id)} />
                </div>
              </div>
            </div>
          ))}
        </section>
      );
    }

    if (experiments && experiments.message.code == "S051" && !error) {
      renderd = (
        <section className={style.experimentsList}>
          <div className={style.experimenstListHeader}>
            <h1>Digital laboratory book</h1>
            <Link to={`/reservation`}>
              <AiOutlinePlus />
            </Link>
          </div>
          <p style={{ fontSize: "1.4rem", marginTop: "2rem" }}>
            {experiments.message.text}
          </p>
        </section>
      );
    }
    return renderd;
  };

  return renderExperiments();
};

export default ExperimentsList;
