import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.loadContainer}>
      <div className={style.loadBox}>
        <div className={style.loader}>Loading...</div>
        <p>Pleas wait</p>
      </div>
    </div>
  );
};

export default Loading;
