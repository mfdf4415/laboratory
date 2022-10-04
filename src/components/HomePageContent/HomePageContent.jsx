import img from "../../img/packing_#.jpg"
import style from "./HomePageContent.module.css"

const HomePageContent = () => {
  return (
    <section className={style.homeSection}>
      <div>
        <h1>Title of Home</h1>
        <hr />
      </div>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          nesciunt enim iste provident aliquam? Odio eos repellat ut rerum. Ab
          odio dolores deserunt vel ex quam enim nisi officiis nostrum.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit
          voluptatem recusandae ratione illo adipisci modi doloremque pariatur
          voluptate dolorum sapiente corrupti dolores officia ab, hic vel
          placeat omnis nostrum.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ipsum maxime et doloremque voluptatum officia numquam nobis minima
          molestias, consectetur quibusdam ut libero illum reiciendis soluta
          vero nemo possimus magnam!
        </p>
        <img src={img} alt="" />
      </article>
    </section>
  );
};

export default HomePageContent;
