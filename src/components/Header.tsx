
import styles from "./Header.module.scss"
import { MdHome, MdChevronRight } from "react-icons/md";
import useGlobal from "../hooks/useGlobal";




const Header = () => {
  const { titlePage } = useGlobal();

  return (
    <>
      <div className={styles.container_header}>
        <MdHome fontSize="30px" color="gray" />
        <MdChevronRight fontSize="20px" color="gray" />
        <div className={styles.header_title}>{titlePage}</div>
      </div>
    </>
  );
};

export default Header;
