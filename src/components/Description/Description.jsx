import { useFormik } from "formik";
import { useState } from "react";
import style from "./Description.module.css";
import * as yup from "yup";
import { saveNewExperiment } from "../../Services/saveNewExperiment";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../common/Loading/Loading";
import { formatImgSize } from "../../utils/formatImgSIze";
import { AiOutlineCloudUpload } from "react-icons/ai";

const initialValues = {
  name: "",
  description: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Name ist Verpflichtend"),
  description: yup.string().required("Beschreibung ist Verpflichtend"),
});

const Description = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const formData = {
      ...values,
      "photos[0]": images[0],
      "photos[1]": images[1],
    };
    setLoading(true);
    try {
      const res = await saveNewExperiment(params.id, formData);
      setLoading(false);
      toast.success(res.data.message.text);
      navigate(`/experiments/${params.id}`);
    } catch (error) {
      setLoading(false);
      toast.error(error.data.message.text);
      toast.error("Fehler");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const uploadImgHandler = (e) => {
    if (e.target.files[0].size / (1024 * 1024) > 2) {
      return toast.warning("Dateigröße muss größer als 2 MB sein.");
    } else {
      setImages([...images, e.target.files[0]]);
    }
  };

  return (
    <section className={style.descriptionContainer}>
      {loading ? (
        <>
          <Loading />
          <div className={style.descriptionHeader}>
            <h1>Beschreibung</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={style.formRowDesc}>
              <div className={style.labelContainer}>
                <label>Titel Beschreibung:</label>
                <div className={style.error}>
                  {formik.errors["name"] &&
                    formik.touched["name"] &&
                    formik.errors["name"]}
                </div>
              </div>
              <input
                {...formik.getFieldProps("name")}
                type="text"
                name="name"
              />
              <div className={style.labelContainer}>
                <label>Experiment Beschreibung:</label>
                <div className={style.error}>
                  {formik.errors["description"] &&
                    formik.touched["description"] &&
                    formik.errors["description"]}
                </div>
              </div>

              <textarea
                {...formik.getFieldProps("description")}
                name="description"
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className={style.formRowImg}>
              <div className={style.formRowImgItem}>
                <div className={style.imgContainer}>
                  <label htmlFor="image0">
                    Wähle ein Foto aus
                    <input
                      type="file"
                      hidden
                      id="image0"
                      onChange={(e) => uploadImgHandler(e)}
                    />
                  </label>
                  {images[0] && (
                    <img
                      src={URL.createObjectURL(images[0])}
                      alt="Experiment Bild"
                    />
                  )}
                </div>
                <p>
                  {images[0] ? formatImgSize(images[0].size) : "Keine Datei ausgewählt"}
                </p>
              </div>
              <div className={style.formRowImgItem}>
                <div className={style.imgContainer}>
                  <label htmlFor="image1">
                    Wähle ein Foto aus
                    <input
                      hidden
                      id="image1"
                      type="file"
                      onChange={(e) => uploadImgHandler(e)}
                    />
                  </label>
                  {images[1] && (
                    <img
                      src={URL.createObjectURL(images[1])}
                      alt="Experiment Bild"
                    />
                  )}
                </div>
                <p>
                  {images[1] ? formatImgSize(images[1].size) : "Keine Datei ausgewählt"}
                </p>
              </div>
            </div>
            <button type="submit">Senden</button>
          </form>
        </>
      ) : (
        <>
          <div className={style.descriptionHeader}>
            <h1>Beschreibung</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={style.formRowDesc}>
              <div className={style.labelContainer}>
                <label>Titel Beschreibung:</label>
                <div className={style.error}>
                  {formik.errors["name"] &&
                    formik.touched["name"] &&
                    formik.errors["name"]}
                </div>
              </div>
              <input
                {...formik.getFieldProps("name")}
                type="text"
                name="name"
              />
              <div className={style.labelContainer}>
                <label>Experiment Beschreibung:</label>
                <div className={style.error}>
                  {formik.errors["description"] &&
                    formik.touched["description"] &&
                    formik.errors["description"]}
                </div>
              </div>

              <textarea
                {...formik.getFieldProps("description")}
                name="description"
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className={style.formRowImg}>
              <div className={style.formRowImgItem}>
                <div className={style.imgContainer}>
                  <label htmlFor="image0">
                    Wähle ein Foto aus
                    <input
                      type="file"
                      hidden
                      id="image0"
                      onChange={(e) => uploadImgHandler(e)}
                    />
                  </label>
                  {images[0] && (
                    <img
                      src={URL.createObjectURL(images[0])}
                      alt="Experiment Bild"
                    />
                  )}
                </div>
                <p>
                  {images[0] ? formatImgSize(images[0].size) : "Keine Datei ausgewählt"}
                </p>
              </div>
              <div className={style.formRowImgItem}>
                <div className={style.imgContainer}>
                  <label htmlFor="image1">
                    Wähle ein Foto aus
                    <input
                      hidden
                      id="image1"
                      type="file"
                      onChange={(e) => uploadImgHandler(e)}
                    />
                  </label>
                  {images[1] && (
                    <img
                      src={URL.createObjectURL(images[1])}
                      alt="Experiment Bild"
                    />
                  )}
                </div>
                <p>
                  {images[1] ? formatImgSize(images[1].size) : "Keine Datei ausgewählt"}
                </p>
              </div>
            </div>
            <button type="Submit">Senden</button>
          </form>
        </>
      )}
    </section>
  );
};

export default Description;
