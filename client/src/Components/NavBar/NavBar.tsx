import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import chatBubble from "../../Assets/dialogue(1).png";
import logo from "../../Assets/logoDeletedLetters.png";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logoLink}>
              <img className={styles.logo} src={logo} alt="logo" />
            </Link>{" "}
          </div>
          <img className={styles.chatBubble} src={chatBubble} alt="icon-massage" />
        </div>
        <div className={styles.navbarRight}>
          <span className={styles.navbarBurger} onClick={toggleSidebar}>
            ☰
          </span>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""}`} ref={sidebarRef}>
        <span className={styles.closeButton} onClick={toggleSidebar}>
          &times;
        </span>
        <Link to="/" className={styles.sidebarLink} onClick={closeSidebar}>
          בית
        </Link>
        <Link to="/" className={styles.sidebarLink} onClick={closeSidebar}>
          התחברות
        </Link>
        <Link to="/searchProfession" className={styles.sidebarLink} onClick={closeSidebar}>
          חפש מקצוע
        </Link>
        <Link to="/categories" className={styles.sidebarLink} onClick={closeSidebar}>
          קטגוריות
        </Link>
        <Link to="/forum" className={styles.sidebarLink} onClick={closeSidebar}>
          פורומים
        </Link>
        <Link to="#" className={styles.sidebarLink} onClick={closeSidebar}>
          צ'אטים
        </Link>
        <Link to="/userProfile" className={styles.sidebarLink} onClick={closeSidebar}>
          איזור אישי
        </Link>
        <Link to="/favorite" className={styles.sidebarLink} onClick={closeSidebar}>
          מועדפים
        </Link>
        <Link to="/contactUs" className={styles.sidebarLink} onClick={closeSidebar}>
          צור קשר
        </Link>
      </div>
    </>
  );
}

export default NavBar;
