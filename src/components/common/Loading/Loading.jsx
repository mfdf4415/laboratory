import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.loadContainer}>
      <div className={style.loadBox}>
        <div className={style.loader}>Laden...</div>
        <p>Bitte Warten</p>
      </div>
    </div>
  );
};

export default Loading;
