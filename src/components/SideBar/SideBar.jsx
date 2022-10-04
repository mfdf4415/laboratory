import { NavLink } from "react-router-dom";
import style from "./SideBar.module.css";
import { AiTwotoneHome, AiOutlineUser ,AiFillSignal} from "react-icons/ai";

const items = [
  { name: "home", to: "/", icon: <AiTwotoneHome /> },
  { name: "material api", to: "material" , icon: <AiFillSignal />},
  { name: "proposals", to: "proposals" , icon: <AiTwotoneHome />},
  { name: "extermrnts", to: "extermrnts" , icon: <AiTwotoneHome />},
  { name: "reservstion", to: "reservstion" , icon: <AiTwotoneHome />},
  { name: "about us", to: "about-us", icon: <AiOutlineUser /> },
];

const SideBar = () => {
  return (
    <aside className={style.sideBar}>
      <nav>
        {items.map((item) => (
          <div key={item.to}>
            <NavLink
              className={(link) => (link.isActive ? style.active : "")}
              to={item.to}
            >
              {item.icon} {item.name}
            </NavLink>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
