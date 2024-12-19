import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [failedText, setFailedText] = useState("");
  const [userData, setUserData] = useState({
    newUser: {
      username: "",
      password: "",
      age: "",
      role: "",
    },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({
      newUser: {
        ...prevState.newUser,
        [id]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    console.log(userData);

    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        userData
      );
      if (response.status === 201) {
        setFailedText("");
        setUserData({
          newUser: {
            username: "",
            password: "",
            age: "",
            role: "",
          },
        });
        alert(
          `${userData.newUser.username}, ההרשמה הצליחה! ברוך הבא לפלטפורמה.`
        );
        navigate("/login");
      } else {
        setFailedText(
          response.data.message || "An error occurred during sign-up."
        );
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setFailedText("An error occurred during sign-up.");
    }
  };

  return (
    <div className={styles.containerSignUp}>
      <h1 className={styles.signUpTitle}>הרשמה</h1>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <input
          className={styles.signUpInput}
          placeholder="שם משתמש..."
          type="text"
          id="username"
          value={userData.userName}
          onChange={handleChange}
          required
        />
        <hr className={styles.signUpHr} />
        <input
          className={styles.signUpInput}
          placeholder="סיסמה..."
          type="password"
          id="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <hr className={styles.signUpHr} />
        <input
          className={styles.signUpInput}
          placeholder="גיל..."
          type="number"
          id="age"
          value={userData.age}
          onChange={handleChange}
          required
        />
        <hr className={styles.signUpHr} />
        <select
          className={styles.signUpSelect}
          id="role"
          value={userData.role}
          onChange={handleChange}
          required
        >
          <option value="">בחר תפקיד...</option>
          <option value="משתמש">משתמש</option>
          <option value="מנטור">מנטור</option>
          <option value="מומחה">מומחה</option>
        </select>
        <hr className={styles.signUpHr} />
        <button type="submit" className={styles.signUpButton}>
          הירשם{" "}
        </button>
        {failedText && <div className={styles.failedText}>{failedText}</div>}
      </form>
      <p className={styles.signUpParagraph}>
        יש לך כבר חשבון?{" "}
        <Link to="/login" className={styles.signUpLink}>
          התחבר
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
