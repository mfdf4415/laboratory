import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import style from "./Form.module.css"

const Form = () => {
  return (
    <section className={style.formContainer}>
      <Login />
      <SignUp />
    </section>
  );
};

export default Form;
