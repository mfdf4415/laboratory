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
  { name: "home", to: "/", icon: <AiTwotoneHome /> },
  { name: "material api", to: "material", icon: <AiFillSignal /> },
  { name: "proposals", to: "proposals", icon: <AiOutlineUnorderedList /> },
  { name: "about us", to: "about-us", icon: <AiOutlineUser /> },
];

const SideBar = ({ show, setShow }) => {
  const auth = useAuth();

  if (auth) {
    items = [
      { name: "home", to: "/", icon: <AiTwotoneHome /> },
      { name: "material API", to: "material", icon: <AiFillSignal /> },
      { name: "experiments", to: "experiments", icon: <AiTwotoneExperiment /> },
      { name: "reservstion", to: "reservation", icon: <AiFillSchedule /> },
      { name: "proposals", to: "proposals", icon: <AiOutlineUnorderedList /> },
      { name: "about us", to: "about-us", icon: <AiOutlineUser /> },
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
