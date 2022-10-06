import { useFormik } from "formik";
import Input from "../common/Input/Inpu";
import * as yup from "yup";
import style from "./SignUp.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { registerUser } from "../../Services/registerUserService";

const initialValues = {
  email: "",
  password: "",
  full_name: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email is not valid.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
  full_name: yup.string().required("username is required"),
});

const Signup = () => {
  const onSubmit = async (formDate) => {
    console.log(formDate);
    try {
      const res = await registerUser(formDate);
      console.log(res);
    } catch (error) {
      console.error("error",error);
    }
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
        name="full_name"
        label="username"
        formik={formik}
        type="text"
        icon={<AiOutlineUser />}
      />
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
