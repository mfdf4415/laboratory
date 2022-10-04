import style from "./Inpu.module.css";

const Input = ({ name, label, formik, type = "text", icon }) => {
  return (
    <div className={style.formControl}>
      <div className={style.labelContainer}>
        <label htmlFor="">{label}</label>
        <div className={style.error}>
          {formik.errors[name] && formik.touched[name] && formik.errors[name]}
        </div>
      </div>
      <input
        type={type}
        name={name}
        style={{fontFamily:"Font Awesome 5 Free"}}
        placeholder={`${icon}`}
        {...formik.getFieldProps(name)}
      />
    </div>
  );
};

export default Input;
