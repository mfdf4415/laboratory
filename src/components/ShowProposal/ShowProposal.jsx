import { useLocation } from "react-router-dom";
import style from "./ShowProposal.module.css"
const ShowProposal = () => {
  const location = useLocation();

  return (
    <section className={style.homeSection}>
      <div className={style.experimentsListHeader}>
        <h1>Proposals</h1>
      </div>
      <article>
        <p>{location.state.text}</p>
      </article>
    </section>
  );
};

export default ShowProposal;
