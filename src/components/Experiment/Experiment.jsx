import { useState } from "react";
import style from "./Experiment.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getListOfExperiment } from "../../Services/getListOfExperiment";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { deleteExperiment } from "../../Services/deleteExperiment";
import { truncate } from "../../utils/truncate";
import Loading from "../common/Loading/Loading";

const Experiment = () => {
  const [experiment, setExperiment] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const fetchExperiment = async () => {
    try {
      const { data } = await getListOfExperiment(params.id);
      setExperiment(data);
    } catch (err) {
      const { data } = err.response;
      setError(data);
    }
  };
  useEffect(() => {
    fetchExperiment();
  }, []);

  const handleNavigate = (e, id) => {
    e.preventDefault();
    navigate(`/experiments/${params.id}/show/${id}`);
  };

  const handelDelete = async (e, item) => {
    const id = params.id;
    e.stopPropagation();
    setLoading(true);
    try {
      const res = await deleteExperiment(id, item);
      setLoading(false);
      navigate(`/experiments/${params.id}`);
      fetchExperiment();
    } catch (error) {
      setLoading(false);
    }
  };

  const renderExperiment = () => {
    let renderd;

    if (!experiment && !error) {
      renderd = (
        <section className={style.experimentList}>
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

    if (experiment && experiment.data.length !== 0 && !error) {
      renderd = (
        <section className={style.experimentList}>
          {loading ? (
            <>
              <Loading />
              <div className={style.experimentListHeader}>
                <h1>Digital laboratory book</h1>
                <Link to={`/experiments/${params.id}/addExperimrnt`}>
                  <AiOutlinePlus />
                </Link>
              </div>
              <div className={style.experimentSuperView}>
                Frau Abdinian <br />
                responsiblepersonlaboratory@gmail.com <br />
                Herr Ahmadi <br />
                responsiblepersonlaboratory@gmail.com
              </div>
              {experiment.data.experiments.map((expr) => (
                <div
                  onClick={(e) => handleNavigate(e, expr.id)}
                  key={expr.id}
                  className={style.experimentRow}
                >
                  <div className={style.experimentRowTop}>
                    <h3>{expr.name}</h3>
                    <AiOutlineDelete
                      onClick={(e) => handelDelete(e, expr.id)}
                    />
                  </div>
                  <p>{truncate(expr.dascription)}</p>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className={style.experimentListHeader}>
                <h1>Digital laboratory book</h1>
                <Link to={`/experiments/${params.id}/addExperimrnt`}>
                  <AiOutlinePlus />
                </Link>
              </div>
              <div className={style.experimentSuperView}>
                Frau Abdinian <br />
                responsiblepersonlaboratory@gmail.com <br />
                Herr Ahmadi <br />
                responsiblepersonlaboratory@gmail.com
              </div>
              {experiment.data.experiments.map((expr) => (
                <div
                  onClick={(e) => handleNavigate(e, expr.id)}
                  key={expr.id}
                  className={style.experimentRow}
                >
                  <div className={style.experimentRowTop}>
                    <h3>{expr.name}</h3>
                    <AiOutlineDelete
                      onClick={(e) => handelDelete(e, expr.id)}
                    />
                  </div>
                  <p>{truncate(expr.dascription)}</p>
                </div>
              ))}
            </>
          )}
        </section>
      );
    }

    if (experiment && experiment.message.code == "S051" && !error) {
      renderd = (
        <section className={style.experimentList}>
          <div className={style.experimentListHeader}>
            <h1>Digital laboratory book</h1>
            <Link to={`/experiments/${params.id}/addExperimrnt`}>
              <AiOutlinePlus />
            </Link>
          </div>
          <div className={style.experimentSuperView}>
            Frau Abdinian <br />
            responsiblepersonlaboratory@gmail.com <br />
            Herr Ahmadi <br />
            responsiblepersonlaboratory@gmail.com
          </div>
          <p style={{ fontSize: "1.4rem", marginTop: "2rem" }}>
            {experiment.message.text}
          </p>
        </section>
      );
    }

    return renderd;
  };

  return renderExperiment();
};

export default Experiment;
