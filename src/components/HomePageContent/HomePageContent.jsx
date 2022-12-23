import img from "../../img/packing_#.jpg";
import style from "./HomePageContent.module.css";
const HomePageContent = () => {
  return (
    <section className={style.homeSection}>
      <div className={style.experimentsListHeader}>
        <h1>Willkommen</h1>
      </div>
      <article>
        <p>
       Willkommen auf der Webseite des Laborsystems der Materialwissenschaft der Technischen Universität Berlin
<br/>Hier können Studierende:<br/> Ihre Tests buchen<br/> hinterlegte Proposals suchen <br/>Proposals ansehen <br/>Tools, Laborräume und Betreuung buchen.
        
        </p>
      </article>
    </section>
  );
};

export default HomePageContent;
