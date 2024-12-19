const skillsOptions = [
  { value: "communication", label: "תקשורת" },
  { value: "teamwork", label: "עבודת צוות" },
  { value: "problemSolving", label: "פתרון בעיות" },
  { value: "timeManagement", label: "ניהול זמן" },
  { value: "leadership", label: "מנהיגות" },
  { value: "adaptability", label: "גמישות" },
  { value: "creativity", label: "יצירתיות" },
  { value: "criticalThinking", label: "חשיבה ביקורתית" },
  { value: "negotiation", label: "משא ומתן" },
  { value: "conflictResolution", label: "פתרון קונפליקטים" },
  { value: "decisionMaking", label: "קבלת החלטות" },
  { value: "presentation", label: "הצגה" },
  { value: "projectManagement", label: "ניהול פרויקטים" },
  { value: "customerService", label: "שירות לקוחות" },
  { value: "sales", label: "מכירות" },
  { value: "marketing", label: "שיווק" },
  { value: "finance", label: "פיננסים" },
  { value: "dataAnalysis", label: "ניתוח נתונים" },
  { value: "research", label: "מחקר" },
  { value: "teaching", label: "הוראה" },
];

const abilitiesOptions = [
  { value: "multitasking", label: "ריבוי משימות" },
  { value: "attentionToDetail", label: "תשומת לב לפרטים" },
  { value: "empathy", label: "אמפתיה" },
  { value: "resilience", label: "חוסן נפשי" },
  { value: "selfMotivation", label: "מוטיבציה עצמית" },
  { value: "selfDiscipline", label: "משמעת עצמית" },
  { value: "initiative", label: "יוזמה" },
  { value: "stressManagement", label: "ניהול לחץ" },
  { value: "organizationalSkills", label: "כישורים ארגוניים" },
  { value: "interpersonalSkills", label: "כישורים בין-אישיים" },
  { value: "emotionalIntelligence", label: "אינטליגנציה רגשית" },
  { value: "selfConfidence", label: "ביטחון עצמי" },
  { value: "flexibility", label: "גמישות" },
  { value: "workEthic", label: "אתיקה מקצועית" },
  { value: "problemSensitivity", label: "רגישות לבעיות" },
  { value: "selfAwareness", label: "מודעות עצמית" },
  { value: "selfRegulation", label: "ויסות עצמי" },
  { value: "optimism", label: "אופטימיות" },
  { value: "perseverance", label: "התמדה" },
  { value: "curiosity", label: "סקרנות" },
];

const trainingOptions = [
  { value: "projectManagement", label: "ניהול פרויקטים" },
  { value: "digitalMarketing", label: "שיווק דיגיטלי" },
  { value: "dataScience", label: "מדעי הנתונים" },
  { value: "graphicDesign", label: "עיצוב גרפי" },
  { value: "webDevelopment", label: "פיתוח אתרים" },
  { value: "cyberSecurity", label: "אבטחת סייבר" },
  { value: "businessAdministration", label: "מנהל עסקים" },
  { value: "finance", label: "פיננסים" },
  { value: "humanResources", label: "משאבי אנוש" },
  { value: "law", label: "משפטים" },
  { value: "medicine", label: "רפואה" },
  { value: "engineering", label: "הנדסה" },
  { value: "education", label: "חינוך" },
  { value: "psychology", label: "פסיכולוגיה" },
  { value: "architecture", label: "אדריכלות" },
  { value: "marketing", label: "שיווק" },
  { value: "sales", label: "מכירות" },
  { value: "communication", label: "תקשורת" },
  { value: "computerScience", label: "מדעי המחשב" },
  { value: "biology", label: "ביולוגיה" },
];

// EditProfileDialog.js
import { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./EditProfileDialog.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice.tsx";

const EditProfileDialog = ({ onClose, setmakeToCheck }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Getting current user profile from Redux store
  const userProfile = useSelector((state) => state.user.user);

  // Set state variables based on the Redux store values
  const [username, setUsername] = useState(userProfile?.username || "");
  const [age, setAge] = useState(userProfile?.age || "");
  const [role, setRole] = useState(userProfile?.role || "");
  const [skills, setSkills] = useState(userProfile?.skills || []);
  const [abilities, setAbilities] = useState(userProfile?.abilities || []);
  const [training, setTraining] = useState(userProfile?.training || []);
  const [failedText, setFailedText] = useState("");

  const handleSave = async () => {
    const userWithNewData = {
      username,
      age: +age,
      role,
      skills,
      abilities,
      training,
    };

    try {
      const response = await axios.patch("http://localhost:3000/api/users", {
        userWithNewData,
      });

      if (response.status === 201) {
        // Dispatch the updated user profile to Redux store
        dispatch(setUser(userWithNewData));
        onClose();
        setmakeToCheck((prev) => !prev);
      }
    } catch (error) {
      setFailedText("אירעה שגיאה בעת עדכון הפרופיל.");
      console.error(error);
    }
  };

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialogContent}>
        <h2>ערוך פרופיל</h2>
        {failedText && <p className={styles.errorText}>{failedText}</p>}
        <div className={styles.formGroup}>
          <label>שם משתמש:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>גיל:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>תפקיד:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>יכולות:</label>
          <Select
            isMulti
            options={skillsOptions}
            value={skills}
            onChange={setSkills}
            getOptionLabel={(e) => e.label}
            getOptionValue={(e) => e.value}
            placeholder="בחר יכולות"
          />
        </div>
        <div className={styles.formGroup}>
          <label>יכולות נוספות:</label>
          <Select
            isMulti
            options={abilitiesOptions}
            value={abilities}
            onChange={setAbilities}
            getOptionLabel={(e) => e.label}
            getOptionValue={(e) => e.value}
            placeholder="בחר יכולות נוספות"
          />
        </div>
        <div className={styles.formGroup}>
          <label>הכשרות:</label>
          <Select
            isMulti
            options={trainingOptions}
            value={training}
            onChange={setTraining}
            getOptionLabel={(e) => e.label}
            getOptionValue={(e) => e.value}
            placeholder="בחר הכשרות"
          />
        </div>
        <div className={styles.dialogActions}>
          <button onClick={handleSave} className={styles.saveButton}>
            שמור
          </button>
          <button onClick={onClose} className={styles.cancelButton}>
            ביטול
          </button>
          <button
            onClick={() => navigate("/changePassword")}
            className={styles.changePasswordButton}
          >
            שנה סיסמה
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileDialog;
