import dates from "../../utils/dates";
import style from "./LaboratoryDate.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getListOfSpecificLabs } from "../../Services/getListOfSpecificLabs";
import { timeStampEcope } from "../../utils/timeStampEcope";

const default_reserve_hours = [8, 9, 10, 11, 12, 13, 14, 15];

const LaboratoryDate = () => {
  const [specific, setSpecific] = useState([]);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const { data } = await getListOfSpecificLabs(params.id);
        setSpecific(data.data);
      } catch (err) {
        const { data } = err.response;
        setError(data);
      }
    };
    fetchLabs();
  }, []);

  const handelNavigate = (date, startHour) => {
    const newDate = new Date(date.setMinutes(0));
    const finalDate = new Date(newDate.setSeconds(3))
    navigate(`/reservation/${params.id}/reserv`, {
      state: {
        start_at: timeStampEcope(finalDate.setHours(startHour)),
        end_at: timeStampEcope(finalDate.setHours(startHour + 1)),
      },
    });
  };

  const enabled = (index, epoch) => {
    let date = new Date(epoch);
    let hour = default_reserve_hours[index];
    let day = date.getDate();
    let month = date.getMonth();

    if (specific != undefined) {
      if (
        specific.reservations != undefined &&
        specific.reservations.length != 0
      ) {
        return (
          specific.reservations.filter((item) => {
            let itemDate = new Date(item["start date-time"] * 1000);

            return (
              itemDate.getDate() == day &&
              itemDate.getMonth() == month &&
              itemDate.getHours() == hour
            );
          }).length == 0
        );
      }
    }

    return true;
  };

  const renderDate = () => {
    return dates.map((date) => (
      <div key={date} className={style.laboratorysDateItem}>
        <div className={style.date}>{date.toLocaleDateString()}</div>
        <div className={style.times}>
          {default_reserve_hours.map((hour, index) => {
            return (
              <button
                key={hour}
                disabled={!enabled(index, date)}
                onClick={() => handelNavigate(date, hour)}
              >
                {hour}-{hour + 1}
              </button>
            );
          })}
        </div>
      </div>
    ));
  };

  // const renderDates = () => {
  //   let renderd;

  //   if (!specific && !error) {
  //     renderd = (
  //       <div className={style.alertContainer}>
  //         <p className={style.loading}>loadding ...</p>;
  //       </div>
  //     );
  //   }

  //   if (error) {
  //     renderd = (
  //       <div className={style.alertContainer}>
  //         <p className={style.error}>
  //           error : {error.message.code}
  //           <br />
  //           {error.message.text}
  //         </p>
  //       </div>
  //     );
  //   }
  //   if (specific && !error) {
  //     renderd = renderDate();
  //   }
  //   return renderd;
  // };

  return (
    <section className={style.laboratorysDateContainer}>
      <div className={style.listTitle}>
        <p>pleas select date and time</p>
      </div>
      <div className={style.laboratorysDate}>{renderDate()}</div>
    </section>
  );
};

export default LaboratoryDate;
