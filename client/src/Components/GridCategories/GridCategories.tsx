import styles from "./GridCategories.module.css";
import {
  FaLaptop,
  FaWrench,
  FaHeartbeat,
  FaShieldAlt,
  FaChartBar,
  FaGraduationCap,
  FaPaintBrush,
  FaBalanceScale,
  FaBuilding,
  FaPlane,
  FaTruck,
  FaLeaf,
  FaRegMoneyBillAlt,
  FaHandshake,
  FaSeedling,
  FaBullhorn,
  FaMusic,
  FaMedal,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const jobCategoriesWithIcons = [
  { name: "טכנולוגיה", icon: <FaLaptop /> },
  { name: "הנדסה", icon: <FaWrench /> },
  { name: "בריאות ורפואה", icon: <FaHeartbeat /> },
  { name: "צבא וביטחון", icon: <FaShieldAlt /> },
  { name: "שיווק ועסקים", icon: <FaChartBar /> },
  { name: "חינוך והדרכה", icon: <FaGraduationCap /> },
  { name: "יצירה ואומניות", icon: <FaPaintBrush /> },
  { name: "משפטים", icon: <FaBalanceScale /> },
  { name: "עיצוב ואדריכלות", icon: <FaBuilding /> },
  { name: "תיירות וארגון אירועים", icon: <FaPlane /> },
  { name: "לוגיסטיקה ותפעול", icon: <FaTruck /> },
  { name: "מדעי הטבע", icon: <FaLeaf /> },
  { name: "מכירות ושירות לקוחות", icon: <FaRegMoneyBillAlt /> },
  { name: "פיננסים וחשבונאות", icon: <FaRegMoneyBillAlt /> },
  { name: "רווחה ושירותים חברתיים", icon: <FaHandshake /> },
  { name: "חקלאות וסביבה", icon: <FaSeedling /> },
  { name: "תקשורת ודוברות", icon: <FaBullhorn /> },
  { name: "מוזיקה ובידור", icon: <FaMusic /> },
  { name: "ספורט", icon: <FaMedal /> },
];

function GridCategories({ setCategoryName }) {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const handleClick = (categoryName: string) => {
    setCategoryName(categoryName);
    navigate("/searchProfession");
  };

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <div>
      <ul className={styles.ul}>
        {jobCategoriesWithIcons
          .slice(0, showAll ? jobCategoriesWithIcons.length : 10)
          .map((category, index) => (
            <li
              key={index}
              className={styles.li}
              onClick={() => handleClick(category.name)}
            >
              <div>{category.icon}</div>
              <h1>{category.name}</h1>
            </li>
          ))}
      </ul>
      <button className={styles.showMoreButton} onClick={toggleShowAll}>
        {showAll ? "סגור" : "ראה עוד"}
      </button>
    </div>
  );
}

export default GridCategories;
