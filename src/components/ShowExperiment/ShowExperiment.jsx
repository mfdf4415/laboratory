import style from "./ShowExperiment.module.css";
import { parsePath, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getShowExperiment } from "../../Services/showExperiment";
import { getImageServices } from "../../Services/getImagesServices";
import { Buffer } from "buffer";
import Loading from "../common/Loading/Loading";
import ShowImage from "../ShowImage/ShowImage";

const ShowExperiment = () => {
  const [showExperiment, setShowExperiment] = useState(null);
  const [error, setError] = useState(null);
  const [images, setImages] = useState({ image1: "", image2: "" });
  const [imgContainer, setImgContainer] = useState({
    isShow: false,
    src: "",
  });
  const params = useParams();

  useEffect(() => {
    const fetchshowExperiment = async () => {
      try {
        const { data } = await getShowExperiment(params.id, params.item);

        let photos = data.data.experiment.photos;
        if (photos.length != 0) {
          fetchImages(photos);
        }

        setShowExperiment(data);
      } catch (err) {
        setError(err.data);
      }
    };
    fetchshowExperiment();
  }, []);

  const fetchPhoto = async (path) => {
    let photo = "";
    try {
      const res = await getImageServices(path);
      const base64 = btoa(
        new Uint8Array(res.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      photo = `data:;base64, ${base64}`;
    } catch (error) {}

    return photo;
  };

  const fetchImages = async (photos) => {
    let image1 = await fetchPhoto(photos[0].path);
    let image2 = "";

    if (photos.length > 1) {
      image2 = await fetchPhoto(photos[1].path);
    }

    setImages({ image1, image2 });
  };

  const setShowHandler = () => {
    setImgContainer({
      isShow: false,
      srs: "",
    });
  };

  const renderShowExperiment = () => {
    let renderd;

    if (!showExperiment && !error) {
      renderd = (
        <div className={style.showExperimentContainer}>
          <Loading />
        </div>
      );
    }

    if (error) {
      renderd = (
        <div className={style.alertContainer}>
          <p className={style.error}>
            error : {error.message.code}
            <br />
            {error.message.text}
          </p>
        </div>
      );
    }

    if (showExperiment && showExperiment.data && !error) {
      renderd = (
        <div className={style.showExperimentContainer}>
            <ShowImage img={imgContainer.src} show={imgContainer.isShow} setShow={setShowHandler} />
          <div className={style.showTop}>
            <h3>{showExperiment.data.experiment.name}</h3>
            <p>{showExperiment.data.experiment.dascription}</p>
          </div>
          <div className={style.showImg}>
            {images.image1 && (
              <div className={style.imgContainer}>
                <img
                  src={images.image1}
                  onClick={() =>
                    setImgContainer({ isShow: true, src: images.image1 })
                  }
                />
              </div>
            )}
            {images.image2 && (
              <div className={style.imgContainer}>
                <img
                  src={images.image2}
                  onClick={() =>
                    setImgContainer({ isShow: true, src: images.image2 })
                  }
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (showExperiment && showExperiment.message.code == "S051" && !error) {
      renderd = (
        <section className={style.showExperimentContainer}>
          <p style={{ fontSize: "1.4rem", marginTop: "2rem" }}>
            {showExperiment.message.text}
          </p>
        </section>
      );
    }
    return renderd;
  };
  return renderShowExperiment();
};
export default ShowExperiment;
