import styles from "./Article.module.css";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

function Article() {
  return (
    <div>
      I AM ATRICLE
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Article;
