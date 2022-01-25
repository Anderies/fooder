import React from "react";
import { Link } from "react-router-dom";
import stylesHome from "../css/home.module.css"

function Home() {
  return (
    <>
      <nav className={`${stylesHome.box} mt-3`}>
        {/* <router></router> */}
        {/* <p className={styles.blue}>SignUp</p> */}
        <Link className={`${stylesHome.blue} ${stylesHome.itemNav}`} to="/welcome">SignUp</Link>
        <Link className={`${stylesHome.blue} ${stylesHome.itemNav}`} to="/">Fooder Home</Link>
        <Link className={`${stylesHome.blue} ${stylesHome.itemNav}`} to="/meal">Fooder Scan</Link>
      </nav>
    </>
  );
}

export default Home;