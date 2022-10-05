import { Link } from "react-router-dom";
import style from "./LaboratorysList.module.css"

const LaboratorysList = () => {
  return (
    <section className={style.laboratorysList}>
      <div className={style.listTitle}>
        <p>pleas select laboratory:</p>
      </div>
      <div className={style.laboratorys}>
        <Link to="/reservation/1">
            labortory1        
        </Link>   
        <Link>
            labortory1        
        </Link>   
        <Link>
            labortory1        
        </Link>   
        <Link>
            labortory1        
        </Link>   
        <Link>
            labortory1        
        </Link>   
      </div>
    </section>
  );
};

export default LaboratorysList;
