import React, { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.css";
import chatBubble from "../../Assets/dialogue(1).png";
import logo from "../../Assets/Screenshot 2024-12-18 114605.png";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  // Handle clicks outside the sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
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
            <img className={styles.logo} src={logo} alt="logo" />
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
        <a href="#" className={styles.sidebarLink}>
          בית
        </a>
        <a href="#" className={styles.sidebarLink}>
          חפש מקצוע
        </a>
        <a href="#" className={styles.sidebarLink}>
          קטגוריות
        </a>
        <a href="#" className={styles.sidebarLink}>
          פורמים
        </a>
        <a href="#" className={styles.sidebarLink}>
          צ'אטים
        </a>
        <a href="#" className={styles.sidebarLink}>
          איזור אישי
        </a>
        <a href="#" className={styles.sidebarLink}>
          מועדפים
        </a>
        <a href="#" className={styles.sidebarLink}>
          צור קשר
        </a>
      </div>
    </>
  );
}

export default NavBar;
