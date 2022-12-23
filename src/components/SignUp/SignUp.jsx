import { useFormik } from "formik";
import Input from "../common/Input/Inpu";
import * as yup from "yup";
import style from "./SignUp.module.css";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { registerUser } from "../../Services/registerUserService";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "../common/Loading/Loading";
import _ from "lodash";

const initialValues = {
    email: "",
    password: "",
    full_name: "",
};

const validationSchema = yup.object({
    email: yup
        .string()
        .email("Email ist ungültig.")
        .required("Email is notwendig."),
    password: yup
        .string()
        .required("Kein Password angegeben.")
        .min(8, "Password ist zu kurz - muss mindestens 8 Zeichen haben.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])/,
            "Muss ein Großbuchstaben,Kleinbuchstaben enthalten."
        )
        .matches(/^(?=.{6,20}$)\D*\d/, "Muss eine Zahl enthalten"),
    full_name: yup.string().required("Benutzernamen ist notwendig"),
});

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ show: false, text: "" });

    const onSubmit = async (formDate) => {
        setLoading(true);
        try {
            const res = await registerUser(formDate);
            setLoading(false);
            setError({ show: false, text: '' })
            console.log(res)

            const successMessageCode = _.get(res, 'data.message.code', -1)
            const failMessageCode = _.get(res, 'response.data.message.code', -1)

            console.log("success", successMessageCode)
            console.log("failure", failMessageCode)

            if (failMessageCode != -1) {

                const emailError = _.get(res, 'response.data.errors.email[0].message', -1)
                const fullnameError = _.get(res, 'response.data.errors.full_name[0].message', -1)
                const passwordError = _.get(res, 'response.data.errors.password[0].message', -1)

                if (emailError != -1) {
                    setError({ show: true, text: emailError })
                } else if (fullnameError != -1) {
                    setError({ show: true, text: fullnameError })
                } else if (passwordError != -1) {
                    setError({ show: true, text: passwordError })
                } else {
                    setError({ show: true, text: res.response.data.message.text });
                }
            } else if (successMessageCode == 'S211') {
                toast.success(res.data.message.text + ",now login");
            }
        } catch (error) {
            setLoading(false);
            console.error("sign up error ==>", error);
            //setError({ show: true, text: error.response.message.text });
        }
    };

    const formik = useFormik({
        onSubmit,
        initialValues,
        validationSchema,
        validateOnMount: true,
    });

    const renderSignup = () => {
        let renderd;

        if (loading) {
            renderd = (
                <>
                    <Loading />
                    {error.show && (
                        <div className={style.errAlert}>
                            <p>{error.text}</p>
                        </div>
                    )}
                    <form className={style.form} onSubmit={formik.handleSubmit}>
                        <h3>Create acount</h3>
                        <Input
                            name="full_name"
                            label="Benutzername"
                            formik={formik}
                            type="text"
                            icon={<AiOutlineUser />}
                        />
                        <Input
                            name="email"
                            label="email"
                            formik={formik}
                            type="email"
                            icon={<AiOutlineMail />}
                        />
                        <Input
                            name="password"
                            label="password"
                            formik={formik}
                            type="password"
                            icon={<AiOutlineLock />}
                        />
                        <button
                            className={style.formBtn}
                            type="submit"
                            disabled={!formik.isValid}
                        >
                            Anmelden
                        </button>
                    </form>
                </>
            );
        }

        if (!loading) {
            renderd = (
                <>
                    {error.show && (
                        <div className={style.errAlert}>
                            <p>{error.text}</p>
                        </div>
                    )}
                    <form className={style.form} onSubmit={formik.handleSubmit}>
                        <h3>Benutzerkonto erstellen</h3>
                        <Input
                            name="full_name"
                            label="benutzername"
                            formik={formik}
                            type="text"
                            icon={<AiOutlineUser />}
                        />
                        <Input
                            name="email"
                            label="email"
                            formik={formik}
                            type="email"
                            icon={<AiOutlineMail />}
                        />
                        <Input
                            name="password"
                            label="password"
                            formik={formik}
                            type="password"
                            icon={<AiOutlineLock />}
                        />
                        <button
                            className={style.formBtn}
                            type="submit"
                            disabled={!formik.isValid}
                        >
                            Anmelden
                        </button>
                    </form>
                </>
            );
        }

        return renderd;
    };

    return renderSignup();
};

export default Signup;
