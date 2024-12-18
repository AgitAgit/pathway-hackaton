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
      <h2 className={styles.header}>Contact Us - Pathway AI</h2>
      <div className={styles.contactDetails}>
        <p>
          <strong>Name:</strong> {fakeContactData.name}
        </p>
        <p>
          <strong>Email:</strong> {fakeContactData.email}
        </p>
        <p>
          <strong>address:</strong> {fakeContactData.address}
        </p>
        <p>
          <strong>website</strong> {fakeContactData.website}
        </p>
      </div>
      <div className={styles.footer}>
        <p>
          If you have any questions, feel free to reach out to us anytime. We
          are here to help!
        </p>
        <p>
          We promise to make your experience with Penn even better in the
          future.
        </p>
        <button onClick={handleGoHome} className={styles.homeButton}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
