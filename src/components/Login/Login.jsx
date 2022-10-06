import { useFormik } from "formik";
import Input from "../common/Input/Inpu";
import * as yup from "yup";
import style from "./Login.module.css";
import { AiOutlineUser } from "react-icons/ai";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email is not valid.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
});

const Login = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      <h3>login</h3>
      <Input
        name="email"
        label="email"
        formik={formik}
        type="email"
        icon={<AiOutlineUser />}
      />
      <Input
        name="password"
        label="password"
        formik={formik}
        type="password"
        icon={<AiOutlineUser />}
      />
      <button
        disabled={!formik.isValid}
        className={style.formBtn}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
