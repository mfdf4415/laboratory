import img from "../../img/packing_#.jpg";
import style from "./MaterialPageContent.module.css";
import { getListOfResevation } from "../../Services/getListOfReservation";
import { useEffect } from "react";

const MaterialPageContent = () => {
  return (
    <section className={style.homeSection}>
      <div className={style.experimentsListHeader}>
        <h1>Matrial API</h1>
      </div>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          nesciunt enim iste provident aliquam? Odio eos repellat ut rerum. Ab
          odio dolores deserunt vel ex quam enim nisi officiis nostrum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Atque velit
          voluptatem recusandae ratione illo adipisci modi doloremque pariatur
          voluptate dolorum sapiente corrupti dolores officia ab, hic vel
          placeat omnis nostrum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate ipsum maxime et doloremque voluptatum
          officia numquam nobis minima molestias, consectetur quibusdam ut
          libero illum reiciendis soluta vero nemo possimus magnam!
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos
          tempora exercitationem, ipsum veritatis odit veniam consequuntur
          tenetur magnam sequi consequatur similique soluta ex mollitia numquam,
          perferendis facilis molestias cum?
        </p>
      </article>
    </section>
  );
};

export default MaterialPageContent;
