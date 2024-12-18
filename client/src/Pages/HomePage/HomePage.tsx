import styles from "./HomePage.module.css";
import Logo from "../../Assets/Screenshot 2024-12-18 114605.png";
import GridCategories from "../../Components/GridCategories/GridCategories";
import Feedback from "../../Components/Feedback/Feedback";

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.logoContainer}>
        <img className={styles.logoImg} src={Logo} alt="logo web" />
      </div>
      <h2 className={styles.aboutWeb}>
        אצלנו ב-Pathway, אנחנו לא רק מנטורים, אנחנו שותפים לדרך שלך. תמצא כאן את
        התמיכה, ההכוונה והכלים שיעזרו לך למצוא את המסלול הנכון עבורך, גם בתחום
        הקריירה וגם בחיים. בנוסף, תוכל להתייעץ עם פורומים מקצועיים בתחומים שונים
        ולקבל את ההכוונה שאתה צריך ממומחים וקהילת משתמשים
      </h2>
      <GridCategories />
      <Feedback />
    </div>
  );
}

export default HomePage;
