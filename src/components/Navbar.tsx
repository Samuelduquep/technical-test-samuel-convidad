import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss"
import { WiCloud } from "react-icons/wi";
import { MdCheckCircleOutline } from "react-icons/md";
import useGlobal from "../hooks/useGlobal";



const Navbar = () => {
  const { activePage } = useGlobal()
  const iconStyle = {
    fontSize: "30px",
  };
  const itemsNav = [
    {
      icon: <WiCloud style={iconStyle} />,
      item: "Weather",
      url: "/weather",
      active: activePage == "weather" ? true : false
    },
    {
      icon: <MdCheckCircleOutline style={iconStyle} />,
      item: "Form Validation",
      url: "/form",
      active: activePage == "form" ? true : false
    },
  ];

  return (
    <div className={styles.container_navbar}>
      <nav className={styles.navbar}>
        <ul>
          {itemsNav.map((item) => (
            <Link className={item.active ? styles.active_page : ""} key={item.item} to={item.url}>
              <li>
                {item.icon}
                <span>{item.item}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
