import styles from "./Article.module.css";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

function Article({ setIsLogin, isLogin }) {
  return (
    <div>
      <NavBar isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className={styles.article}>
        <Outlet />
      </div>
    </div>
  );
}

export default Article;
