import { AiFillMail } from "react-icons/ai";
import style from "./Inpu.module.css";

const Input = ({ name, label, formik, type = "text",icon }) => {
  return (
    <div className={style.formControl}>
      <div className={style.labelContainer}>
        <div className={style.error}>
          {formik.errors[name] && formik.touched[name] && formik.errors[name]}
        </div>
      </div>
      <div className={style.inputContainer}>
        {icon}
        <input
          type={type}
          name={name}
          placeholder={label}
          {...formik.getFieldProps(name)}
        />
      </div>
    </div>
  );
};

export default Input;
