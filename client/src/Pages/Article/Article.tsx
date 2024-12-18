import styles from "./Article.module.css";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

function Article() {
  return (
    <div>
      <NavBar />
      <div className={styles.article}>
        <Outlet />
      </div>
    </div>
  );
}

export default Article;
