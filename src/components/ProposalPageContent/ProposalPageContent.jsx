import {useNavigate} from "react-router-dom";
import {truncate} from "../../utils/truncate";
import style from "./ProposalPageContent.module.css";
import proposals from "../../db/proposals";
import {useEffect, useState} from "react";

const ProposalPageContent = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {
        setData(proposals)
    }, [])

    const filterHandler = (e) => {
        const value = e.target.value

        if (value == "") {
            setData(proposals)
        } else {
            const filterdData = proposals.filter((item) => {
                return item.text.toLowerCase().includes(value.toLowerCase())
            })

            setData(filterdData)
        }

    }

    return (
        <section className={style.homeSection}>
            <div className={style.experimentsListHeader}>
                <h1>Proposals</h1>
                <input type="text" placeholder="Suche..." onChange={filterHandler}/>
            </div>

            <article>
                {data.map((item) => (
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
                        <hr />
                    </>
                ))}
            </article>
        </section>
    );
};

export default ProposalPageContent;