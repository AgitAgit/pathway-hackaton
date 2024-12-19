import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice.tsx";
import styles from "./Article.module.css";

function Article({ setIsLogin, isLogin }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const username = sessionStorage.getItem("username");

    if (!isLogin && username) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/users/${username}`
          );
          console.log(response);

          dispatch(setUser(response.data.message.foundUser));
          setIsLogin(true);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, [isLogin, dispatch]);

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
