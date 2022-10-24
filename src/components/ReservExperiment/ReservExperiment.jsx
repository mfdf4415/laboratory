import style from "./ReservExperiment.module.css";
import {AiFillFilePdf} from "react-icons/ai";
import {useFormik} from "formik";
import * as yup from "yup";
import {saveNewReservation} from "../../Services/saveNewReservation";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import CleanPdf from "../../resource/PDF/Clean.pdf";
import ProtocolPdf from "../../resource/PDF/Protocol.pdf";
import SecurityPdf from "../../resource/PDF/Security.pdf";
import {toast} from "react-toastify";
import {useState} from "react";
import Loading from "../common/Loading/Loading";

const initialValues = {
    title: "", description: "", supervisor_needed: "1", agree: [],
};

const validationSchema = yup.object({
    title: yup.string().required("title is required"),
    description: yup.string().required("descration is required"),
    supervisor_needed: yup.string().required("required"),
    agree: yup.array().min(1).required("required"),
});


const options = [{name: "Yes", value: "1"}, {name: "No", value: "0"},];

const ReservExpriment = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {state} = useLocation();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values) => {
        const formData = {
            description: values.description,
            supervisor_needed: values.supervisor_needed,
            title: values.title,
            end_at: state.end_at - 3,
            start_at: state.start_at - 3,
        };
        setLoading(true);
        try {
            const {data} = await saveNewReservation(formData, params.id);
            setLoading(false);
            toast.success("succses" + data.message.text);
            navigate("/experiments");
        } catch (error) {
            setLoading(false);
            toast.error("eeror" + error.response.data.message.text);
        }
    };

    const formik = useFormik({
        initialValues, onSubmit, validationSchema,
    });

    return (<section className={style.resrvContainer}>
        {loading ? (<>
            <Loading/>
            <form onSubmit={formik.handleSubmit} className={style.reservForm}>
                <div className={style.formRow}>
                    <div className={style.labelContainer}>
                        <label>Please Enter your Experiment Title:*</label>
                        {formik.errors["title"] && formik.touched["title"] && formik.errors["title"]}
                    </div>

                    <input
                        type="text"
                        name="title"
                        {...formik.getFieldProps("title")}
                    />
                </div>
                <div className={style.formRow}>
                    <div className={style.labelContainer}>
                        <label>Required description:*</label>
                        {formik.errors["description"] && formik.touched["description"] && formik.errors["description"]}
                    </div>
                    <textarea
                        type="text"
                        rows="6"
                        name="description"
                        className={style.textArea}
                        {...formik.getFieldProps("description")}
                    />
                </div>
                <div className={style.labelContainer}>
                    <label>I need the supervisor_needed of the lab manager:</label>
                    {formik.errors["supervisor_needed"] && formik.touched["supervisor_needed"] && formik.errors["supervisor_needed"]}
                </div>
                <div className={style.formRow}>
                    <select
                        name="supervisor_needed"
                        {...formik.getFieldProps("supervisor_needed")}
                    >
                        <option selected value="1">
                            Yes
                        </option>
                        <option value="0">No</option>
                    </select>
                </div>
                <div className={style.formRowFile}>
                    <p>
                        Please download and review the Safety description and Laboratory
                        Protocols.
                    </p>
                    <div className={style.pdf}>
                        <a href={CleanPdf} target="blank">
                            <AiFillFilePdf/> <br/>
                            Clean
                        </a>
                        <a href={SecurityPdf} target="blank">
                            <AiFillFilePdf/>
                            <br/>
                            Security
                        </a>
                        <a href={ProtocolPdf} target="blank">
                            <AiFillFilePdf/>
                            <br/>
                            Protocol
                        </a>
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
                            I have read and agree to the logs and security description.*
                        </label>
                        {formik.errors["agree"] && formik.touched["agree"] && formik.errors["agree"]}
                    </div>
                </div>
                <button type="submit" className={style.btn}>
                    Reservation
                </button>
            </form>
        </>) : (<form onSubmit={formik.handleSubmit} className={style.reservForm}>
            <div className={style.formRow}>
                <div className={style.labelContainer}>
                    <label>Please Enter your Experiment Title:*</label>
                    {formik.errors["title"] && formik.touched["title"] && formik.errors["title"]}
                </div>

                <input
                    type="text"
                    name="title"
                    {...formik.getFieldProps("title")}
                />
            </div>
            <div className={style.formRow}>
                <div className={style.labelContainer}>
                    <label>Required description:*</label>
                    {formik.errors["description"] && formik.touched["description"] && formik.errors["description"]}
                </div>
                <textarea
                    type="text"
                    rows="6"
                    name="description"
                    className={style.textArea}
                    {...formik.getFieldProps("description")}
                />
            </div>
            <div className={style.labelContainer}>
                <label>I need the supervisor_needed of the lab manager:</label>
                {formik.errors["supervisor_needed"] && formik.touched["supervisor_needed"] && formik.errors["supervisor_needed"]}
            </div>
            <div className={style.formRow}>
                <select
                    name="supervisor_needed"
                    {...formik.getFieldProps("supervisor_needed")}
                >
                    <option selected value="1">
                        Yes
                    </option>
                    <option value="0">No</option>
                </select>
            </div>
            <div className={style.formRowFile}>
                <p>
                    Please download and review the Safety description and Laboratory
                    Protocols.
                </p>
                <div className={style.pdf}>
                    <a href={CleanPdf} target="blank">
                        <AiFillFilePdf/> <br/>
                        Clean
                    </a>
                    <a href={SecurityPdf} target="blank">
                        <AiFillFilePdf/>
                        <br/>
                        Security
                    </a>
                    <a href={ProtocolPdf} target="blank">
                        <AiFillFilePdf/>
                        <br/>
                        Protocol
                    </a>
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
                        I have read and agree to the logs and security description.*
                    </label>
                    {formik.errors["agree"] && formik.touched["agree"] && formik.errors["agree"]}
                </div>
            </div>
            <button type="submit" className={style.btn}>
                Reservation
            </button>
        </form>)}
    </section>);
};

export default ReservExpriment;
