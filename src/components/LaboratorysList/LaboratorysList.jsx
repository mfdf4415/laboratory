import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getLabs } from "../../Services/getLabsService";
import Loading from "../common/Loading/Loading";
import style from "./LaboratorysList.module.css";

const LaboratorysList = () => {
  const [labs, setLabs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const { data } = await getLabs();
        setLabs(data.data);
      } catch (err) {
        const { data } = err.response;
        setError(data);
      }
    };
    fetchLabs();
  }, []);

  const renderLabs = () => {
    let renderd;

    if (!labs && !error) {
      renderd = (
        <section className={style.laboratorysList}>
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
    if (labs && !error) {
      renderd = (
        <section className={style.laboratorysList}>
          <div className={style.listTitle}>
            <p>Bitte Labor auswählen:</p>
          </div>
          <div className={style.laboratorys}>
            {labs.map((lab) => (
              <Link key={lab.id} to={`/reservation/${lab.id}`}>
                {lab.name}
              </Link>
            ))}
          </div>
        </section>
      );
    }
    return renderd;
  };

  return renderLabs();
};

export default LaboratorysList;
