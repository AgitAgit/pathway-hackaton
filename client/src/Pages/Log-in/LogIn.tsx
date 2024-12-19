import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice.tsx";
import styles from "./LogIn.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [failedLogText, setFailedLogText] = useState("");

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          username,
          password,
        }
      );
      if (response.data.login) {
        alert("התחברת בהצלחה");
        console.log(response.data.user);

        dispatch(setUser(response.data.user));
        navigate("/");
        setIsLogin(true);
      } else {
        setFailedLogText(
          response.data.message || "An error occurred during login."
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      setFailedLogText("An error occurred during login.");
    }
  };

  return (
    <div className={styles.logInContainer}>
      <h1 className={styles.logInTitle}>התחברות</h1>
      <form className={styles.logInForm} onSubmit={handleLogInSubmit}>
        <input
          className={styles.logInInput}
          placeholder="שם משתמש..."
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <hr className={styles.logInHr} />
        <div className={styles.passwordContainer}>
          <input
            className={`${styles.logInInput} ${styles.passwordInput}`}
            placeholder="סיסמה..."
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div> </div>
          <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <hr className={styles.logInHr} />
        <button type="submit" className={styles.logInButton}>
          התחבר
        </button>
        {failedLogText && (
          <div className={styles.errorMassege}>{failedLogText}</div>
        )}
      </form>
      <p className={styles.logInParagraph}>
        אין לך חשבון?
        <Link to="/signup" className={styles.logInLink}>
          הרשמה
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
