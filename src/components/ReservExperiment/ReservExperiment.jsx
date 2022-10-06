import style from "./ReservExperiment.module.css";
import { AiFillFilePdf } from "react-icons/ai";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  title: "",
  information: "",
  support: "",
  agree: [],
};

const validationSchema = yup.object({
  title: yup.string().required("title is required"),
  information: yup.string(),
  support: yup.string().required("required"),
  agree: yup.array().min(1).required("required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const ReservExpriment = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <section className={style.resrvContainer}>
      <form onSubmit={formik.handleSubmit} className={style.reservForm}>
        <div className={style.formRow}>
          <div className={style.labelContainer}>
            <label>Please Enter your Experiment Title:*</label>
            {formik.errors["title"] &&
              formik.touched["title"] &&
              formik.errors["title"]}
          </div>

          <input type="text" name="title" {...formik.getFieldProps("title")} />
        </div>
        <div className={style.formRow}>
          <div className={style.labelContainer}>
            <label>Required Information:*</label>
            {formik.errors["information"] &&
              formik.touched["information"] &&
              formik.errors["information"]}
          </div>
          <textarea
            type="text"
            rows="6"
            name="information"
            className={style.textArea}
            {...formik.getFieldProps("information")}
          />
        </div>
        <div className={style.labelContainer}>
          <label>I need the support of the lab manager:</label>
          {formik.errors["support"] &&
            formik.touched["support"] &&
            formik.errors["support"]}
        </div>
        <div className={style.formRow}>
          <select name="support" id="" {...formik.getFieldProps("support")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={style.formRowFile}>
          <p>
            Please download and review the Safety Information and Laboratory
            Protocols.
          </p>
          <div className={style.pdf}>
            <AiFillFilePdf />
            <AiFillFilePdf />
            <AiFillFilePdf />
          </div>
        </div>
        <div className={style.formRowCheckBox}>
          <input
            type="checkbox"
            name="agree"
            {...formik.getFieldProps("agree")}
            value="agree"
          />
          <div className={style.labelContainer}>
            <label>
              I have read and agree to the logs and security information.*
            </label>
            {formik.errors["agree"] &&
              formik.touched["agree"] &&
              formik.errors["agree"]}
          </div>
        </div>
        <button type="submit" className={style.btn}>
          Reservation
        </button>
      </form>
    </section>
  );
};

export default ReservExpriment;
