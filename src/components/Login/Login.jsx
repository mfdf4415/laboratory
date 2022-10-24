import { useFormik } from "formik";
import Input from "../common/Input/Inpu";
import * as yup from "yup";
import style from "./Login.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { loginUser } from "../../Services/loginUser";
import { useAuthActions, useAuth } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { getCsrfToken } from "../../Services/getCsrfToken";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../common/Loading/Loading";

const h = {
  user: {
    id: 15,
    full_name: "MF",
    email: "mohammaderror419@gmail.com",
  },
  ["access token"]: {
    token: "195|6cttbRdrpWn8Q4hol1jTIBvpKzpUayWF24KyetlJ",
    ["device name"]: "macOS",
  },
};

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

const getUA = () => {
  let device = "Unknown";
  const ua = {
    "Generic Linux": /Linux/i,
    Android: /Android/i,
    BlackBerry: /BlackBerry/i,
    Bluebird: /EF500/i,
    "Chrome OS": /CrOS/i,
    Datalogic: /DL-AXIS/i,
    Honeywell: /CT50/i,
    iPad: /iPad/i,
    iPhone: /iPhone/i,
    iPod: /iPod/i,
    macOS: /Macintosh/i,
    Windows: /IEMobile|Windows/i,
    Zebra: /TC70|TC55/i,
  };
  Object.keys(ua).map((v) => navigator.userAgent.match(ua[v]) && (device = v));
  return device;
};

const Login = () => {
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, text: "" });

  const onSubmit = async (values) => {
    const formData = { ...values, device_name: getUA() };
    setLoading(true);
    try {
      const res = await loginUser(formData);
      setLoading(false);
      setAuth(res.data.data);
      if (res.data.status >= 400) {
        setError({ show: true, text: res.data.message.text });
      }
      toast.success(res.data.message.text);
      navigate("/experiments");
      window.location.reload()
    } catch (error) {
      setLoading(false);
    }
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  const renderLogin = () => {
    let renderd;

    if (loading) {
      renderd = (
        <>
          <Loading />
          {error.show ? (
            <div className={style.errAlert}>
              <p>{error.text}</p>
            </div>
          ) : (
            ""
          )}
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
        </>
      );
    }

    if (!loading) {
      renderd = (
        <>
          {error.show ? (
            <div className={style.errAlert}>
              <p>{error.text}</p>
            </div>
          ) : (
            ""
          )}
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
        </>
      );
    }

    return renderd;
  };

  return renderLogin();
};

export default Login;
