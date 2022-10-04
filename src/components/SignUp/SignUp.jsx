import { useFormik } from "formik";
import Input from "../common/Input/Inpu";
import * as yup from "yup";
import style from "./SignUp.module.css";
import { AiOutlineMail } from "react-icons/ai";

const initialValues = {
  email: "",
  password: "",
  username:""
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email is not valid.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
  username:yup.string().required("username is required")
});

const Signup = () => {
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
      <h3>Creat acount</h3>
      <Input
        name="username"
        label="username"
        formik={formik}
        type="text"
        icon="&#61475;"
      />
      <Input
        name="email"
        label="email"
        formik={formik}
        type="email"
        icon="&#61475;"
      />
      <Input
        name="password"
        label="password"
        formik={formik}
        type="password"
        icon="&#61475;"
      />
      <button
        className={style.formBtn}
        type="submit"
        disabled={!formik.isValid}
      >
        Signup
      </button>
    </form>
  );
};

export default Signup;
