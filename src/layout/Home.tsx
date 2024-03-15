
// import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./Home.module.scss"
import Header from "../components/Header";
import { useEffect } from "react";


const Home = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav("/weather")
  }, [])

  return (
    <div className={styles.container_area}>
      <Sidebar />
      <main className={styles.container_outlet}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
