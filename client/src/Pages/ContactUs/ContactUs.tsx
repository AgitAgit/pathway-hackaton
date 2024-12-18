import styles from "./ContactUs.module.css";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const fakeContactData = {
    name: "Pathway AI",
    email: "info@pathway.com",
    address: "1300 El Camino Real, Suite 100 #54, Menlo Park, CA 94025, USA",
    website: "https://pathway.com/",
  };

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.contactUsContainer}>
      <h2 className={styles.header}>צור קשר - Pathway</h2>
      <div className={styles.contactDetails}>
        <p>
          <strong>שם:</strong> {fakeContactData.name}
        </p>
        <p>
          <strong>אימייל:</strong> {fakeContactData.email}
        </p>
        <p>
          <strong>כתובת:</strong> {fakeContactData.address}
        </p>
        <p>
          <strong>אתר אינטרנט:</strong> {fakeContactData.website}
        </p>
      </div>
      <div className={styles.footer}>
        <p>אם יש לך שאלות, אל תהסס לפנות אלינו בכל עת. אנחנו כאן כדי לעזור!</p>
        <p>אנו מבטיחים לשפר את חווייתך עם Penn בעתיד.</p>
        <button onClick={handleGoHome} className={styles.homeButton}>
          חזור לדף הבית
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
