import { useNavigate } from "react-router-dom";
import img from "../../img/packing_#.jpg";
import { truncate } from "../../utils/truncate";
import style from "./ProposalPageContent.module.css";

const items = [
  {
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          nesciunt enim iste provident aliquam? Odio eos repellat ut rerum. Ab
          odio dolores deserunt vel ex quam enim nisi officiis nostrum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Atque velit
          voluptatem recusandae ratione illo adipisci modi doloremque pariatur
          voluptate dolorum sapiente corrupti dolores officia ab, hic vel
          placeat omnis nostrum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate ipsum maxime et doloremque voluptatum
          officia numquam nobis minima molestias, consectetur quibusdam ut
          libero illum reiciendis soluta vero nemo possimus magnam`,
    id: 0,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          nesciunt enim iste provident aliquam? Odio eos repellat ut rerum. Ab
          odio dolores deserunt vel ex quam enim nisi officiis nostrum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Atque velit
          voluptatem recusandae ratione illo adipisci modi doloremque pariatur
          voluptate dolorum sapiente corrupti dolores officia ab, hic vel
          placeat omnis nostrum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate ipsum maxime et doloremque voluptatum
          officia numquam nobis minima molestias, consectetur quibusdam ut
          libero illum reiciendis soluta vero nemo possimus magnam`,
    id: 1,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          nesciunt enim iste provident aliquam? Odio eos repellat ut rerum. Ab
          odio dolores deserunt vel ex quam enim nisi officiis nostrum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Atque velit
          voluptatem recusandae ratione illo adipisci modi doloremque pariatur
          voluptate dolorum sapiente corrupti dolores officia ab, hic vel
          placeat omnis nostrum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate ipsum maxime et doloremque voluptatum
          officia numquam nobis minima molestias, consectetur quibusdam ut
          libero illum reiciendis soluta vero nemo possimus magnam`,
    id: 2,
  },
];

const ProposalPageContent = () => {
  const navigate = useNavigate();

  return (
    <section className={style.homeSection}>
      <div className={style.experimentsListHeader}>
        <h1>Proposals</h1>
      </div>
      <article>
        {items.map((item) => (
          <>
            <p
              key={item.id}
              onClick={() =>
                navigate(`/proposals/${item.id}`, {
                  state: {
                    text: item.text,
                  },
                })
              }
            >
              {truncate(item.text, 500)}
            </p>
            <hr key={item.id} />
          </>
        ))}
      </article>
    </section>
  );
};

export default ProposalPageContent;
