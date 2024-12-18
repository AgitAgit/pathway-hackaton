import styles from "./Article.module.css";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

import React from "react";

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
