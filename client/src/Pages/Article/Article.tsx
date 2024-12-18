import styles from "./Article.module.css";
import { Outlet } from "react-router-dom";

import React from "react";

function Article() {
  return (
    <div>
      I AM ATRICLE
      <Outlet />
    </div>
  );
}

export default Article;
