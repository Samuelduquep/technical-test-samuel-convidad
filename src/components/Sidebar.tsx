import Navbar from "./Navbar";
import styles from "./Sidebar.module.scss"

const Sidebar = () => {
  return (
    <div className={styles.container_sidebar}>
      <h2>Technical Test</h2>
      <Navbar />

      <aside className={styles.sidebar_user}>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
