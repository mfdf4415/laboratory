import { NavLink } from "react-router-dom";
import style from "./SideBar.module.css";
import {
  AiTwotoneHome,
  AiOutlineUser,
  AiFillSignal,
  AiOutlineMore,
  AiTwotoneExperiment,
  AiOutlineUnorderedList,
  AiFillSchedule,
} from "react-icons/ai";
import { useAuth } from "../Context/AuthProvider";

let items = [
  { name: "startseite", to: "/", icon: <AiTwotoneHome /> },
  { name: "materials API", to: "material", icon: <AiFillSignal /> },
  { name: "proposals", to: "proposals", icon: <AiOutlineUnorderedList /> },
  { name: "über uns", to: "about-us", icon: <AiOutlineUser /> },
];

const SideBar = ({ show, setShow }) => {
  const auth = useAuth();

  if (auth) {
    items = [
      { name: "Startseite", to: "/", icon: <AiTwotoneHome /> },
      { name: "materials API", to: "material", icon: <AiFillSignal /> },
      { name: "experimente", to: "experiments", icon: <AiTwotoneExperiment /> },
      { name: "reservation", to: "reservation", icon: <AiFillSchedule /> },
      { name: "proposals", to: "proposals", icon: <AiOutlineUnorderedList /> },
      { name: "Über uns", to: "about-us", icon: <AiOutlineUser /> },
    ];
  }

  return (
    <aside className={!show ? style.sideBar : style.onlySideBar}>
      <nav>
        {items.map((item) => (
          <div key={item.to}>
            <NavLink
              end
              onClick={() => setShow(false)}
              className={({ isActive }) => (isActive ? style.active : "")}
              to={item.to}
            >
              {item.icon} <span>{item.name}</span>
            </NavLink>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
