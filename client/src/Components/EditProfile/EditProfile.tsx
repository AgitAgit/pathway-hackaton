const skillsOptions = [
  {
    skill: "תקשורת",
    description: "יכולת לתקשר בצורה ברורה ומובנת",
  },
  {
    skill: "עבודת צוות",
    description: "יכולת לעבוד בצורה שיתופית עם אחרים",
  },
  {
    skill: "פתרון בעיות",
    description: "יכולת לזהות בעיות ולמצוא פתרונות יצירתיים",
  },
  {
    skill: "ניהול זמן",
    description: "יכולת לארגן ולהקצות זמן בצורה יעילה",
  },
  {
    skill: "מנהיגות",
    description: "יכולת להנחות ולהוביל אחרים בהצלחה",
  },
  {
    skill: "גמישות",
    description: "יכולת להסתגל לשינויים בסביבה או במצבים שונים",
  },
  {
    skill: "יצירתיות",
    description: "יכולת לחשוב בצורה חדשנית ולהביא רעיונות מקוריים",
  },
  {
    skill: "חשיבה ביקורתית",
    description: "יכולת להעריך מידע ולבצע ניתוח מדויק",
  },
  {
    skill: "משא ומתן",
    description: "יכולת לנהל שיחות למען הסכמות והסכמים",
  },
  {
    skill: "פתרון קונפליקטים",
    description: "יכולת להתמודד עם בעיות ולמצוא דרכים לפתרונן",
  },
  {
    skill: "קבלת החלטות",
    description: "יכולת לקבל החלטות בזמן ובצורה נכונה",
  },
  {
    skill: "הצגה",
    description: "יכולת להציג מידע בצורה ברורה ומובנת",
  },
  {
    skill: "ניהול פרויקטים",
    description: "יכולת לנהל ולהוביל פרויקטים בהצלחה",
  },
  {
    skill: "שירות לקוחות",
    description: "יכולת לתת שירות מעולה ולספק פתרונות ללקוחות",
  },
  {
    skill: "מכירות",
    description: "יכולת למכור מוצרים ושירותים בצורה משכנעת",
  },
  {
    skill: "שיווק",
    description: "יכולת לקדם ולמכור מוצר או שירות בשוק",
  },
  {
    skill: "פיננסים",
    description: "יכולת לנהל כספים ולהבין מושגים פיננסיים",
  },
  {
    skill: "ניתוח נתונים",
    description: "יכולת לנתח נתונים ולהפיק מהם תובנות",
  },
  {
    skill: "מחקר",
    description: "יכולת לבצע מחקר מעמיק ולהוציא ממנו מסקנות",
  },
  {
    skill: "הוראה",
    description: "יכולת ללמד ולהעביר ידע בצורה ברורה ומועילה",
  },
];

const abilitiesOptions = [
  {
    ability: "ריבוי משימות",
    description: "יכולת לבצע מספר משימות בו זמנית בצורה יעילה",
  },
  {
    ability: "תשומת לב לפרטים",
    description: "יכולת להבחין בפרטים קטנים ולהתמקד בהם",
  },
  {
    ability: "אמפתיה",
    description: "יכולת להבין ולהרגיש את רגשותיהם של אחרים",
  },
  {
    ability: "חוסן נפשי",
    description: "יכולת להתמודד עם אתגרים ומצבים קשים בצורה חיובית",
  },
  {
    ability: "מוטיבציה עצמית",
    description: "יכולת להניע את עצמך להשגת מטרות",
  },
  {
    ability: "משמעת עצמית",
    description: "יכולת לפעול לפי כללים ולהימנע מהסחות דעת",
  },
  {
    ability: "יוזמה",
    description: "יכולת להניע רעיונות ולפעול באופן עצמאי",
  },
  {
    ability: "ניהול לחץ",
    description: "יכולת להתמודד ולהישאר אפקטיבי במצבים מלחיצים",
  },
  {
    ability: "כישורים ארגוניים",
    description: "יכולת לנהל זמן ומשאבים בצורה מסודרת",
  },
  {
    ability: "כישורים בין-אישיים",
    description: "יכולת לתקשר ולהבין אחרים בצורה חיובית",
  },
  {
    ability: "אינטליגנציה רגשית",
    description: "יכולת לזהות, להבין ולשלוט ברגשותיך ובשל אחרים",
  },
  {
    ability: "ביטחון עצמי",
    description: "יכולת להאמין ביכולות ובכישורים שלך",
  },
  {
    ability: "גמישות",
    description: "יכולת להסתגל לשינויים ולמצבים חדשים",
  },
  {
    ability: "אתיקה מקצועית",
    description: "יכולת לשמור על ערכים מקצועיים בעבודה",
  },
  {
    ability: "רגישות לבעיות",
    description:
      "יכולת לזהות בעיות פוטנציאליות ולפעול לפני שהן הופכות למשמעותיות",
  },
  {
    ability: "מודעות עצמית",
    description:
      "יכולת להבין את עצמך, את רגשותיך ואת הדרך בה אתה משפיע על אחרים",
  },
  {
    ability: "ויסות עצמי",
    description: "יכולת לשלוט ברגשותיך ובתגובותיך במצבים שונים",
  },
  {
    ability: "אופטימיות",
    description: "יכולת לראות את החיוביות וההזדמנויות במצבים מאתגרים",
  },
  {
    ability: "התמדה",
    description: "יכולת להמשיך לפעול למרות מכשולים וקושי",
  },
  {
    ability: "סקרנות",
    description: "יכולת לשאול שאלות ולחפש תשובות ולהתעניין בנושאים חדשים",
  },
];

const trainingOptions = [
  {
    training: "ניהול פרויקטים",
    description: "יכולת לתכנן ולנהל פרויקטים בצורה יעילה",
  },
  {
    training: "שיווק דיגיטלי",
    description: "יכולת לקדם מוצרים ושירותים באמצעות כלים דיגיטליים",
  },
  {
    training: "מדעי הנתונים",
    description: "יכולת לנתח נתונים ולהפיק מהם תובנות",
  },
  {
    training: "עיצוב גרפי",
    description: "יכולת לעצב גרפיקה ויזואלית עבור פרויקטים שונים",
  },
  {
    training: "פיתוח אתרים",
    description: "יכולת לפתח ולתחזק אתרי אינטרנט",
  },
  {
    training: "אבטחת סייבר",
    description: "יכולת להגן על מערכות ממוחשבות ונתונים מפני איומים",
  },
  {
    training: "מנהל עסקים",
    description: "יכולת לנהל ולהוביל עסק או ארגון בצורה מקצועית",
  },
  {
    training: "פיננסים",
    description: "יכולת להבין ולהתנהל בתחום הכספים וההשקעות",
  },
  {
    training: "משאבי אנוש",
    description: "יכולת לנהל את העובדים בארגון ולהתאים אותם לצרכים השונים",
  },
  {
    training: "משפטים",
    description: "יכולת להבין ולפרש חוקים ותקנות בתחום המשפט",
  },
  {
    training: "רפואה",
    description: "יכולת להעניק טיפול רפואי ולטפל בבעיות בריאות",
  },
  {
    training: "הנדסה",
    description: "יכולת לעצב ולבנות מערכות או מכונות טכנולוגיות",
  },
  {
    training: "חינוך",
    description: "יכולת ללמד ולהעביר ידע בתחומים שונים",
  },
  {
    training: "פסיכולוגיה",
    description: "יכולת להבין את התנהגות האדם ולספק תמיכה רגשית",
  },
  {
    training: "אדריכלות",
    description: "יכולת לתכנן ולעצב מבנים ומרחבים",
  },
  {
    training: "שיווק",
    description: "יכולת לקדם ולמכור מוצרים ושירותים בשוק",
  },
  {
    training: "מכירות",
    description: "יכולת לשווק ולמכור בצורה אפקטיבית",
  },
  {
    training: "תקשורת",
    description: "יכולת להעביר מידע בצורה ברורה ומובנת",
  },
  {
    training: "מדעי המחשב",
    description: "יכולת לתכנן ולפתח מערכות תוכנה ומחשבים",
  },
  {
    training: "ביולוגיה",
    description: "יכולת להבין את מבנה ותפקוד האורגניזמים החיים",
  },
];

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
  const [averageBagrutScore, setAverageBagrutScore] = useState(
    userProfile?.averageBagrutScore || ""
  );
  const [psychometricScore, setPsychometricScore] = useState(
    userProfile?.psychometricScore || ""
  );
  const [wantedSalary, setWantedSalary] = useState(
    userProfile?.wantedSalary || ""
  );
  const [wantedWeeklyHours, setWantedWeeklyHours] = useState(
    userProfile?.wantedWeeklyHours || ""
  );
  const [highSchoolGraduate, setHighSchoolGraduate] = useState(
    userProfile?.highSchoolGraduate || false
  );
  const [skills, setSkills] = useState(userProfile?.skills || []);
  const [abilities, setAbilities] = useState(userProfile?.abilities || []);
  const [training, setTraining] = useState(userProfile?.training || []);
  const [failedText, setFailedText] = useState("");

  const handleSave = async () => {
    const userWithNewData = {
      username,
      age: +age,
      role,
      averageBagrutScore,
      psychometricScore,
      wantedSalary,
      wantedWeeklyHours,
      highSchoolGraduate,
      skills,
      abilities,
      training,
    };

    console.log(userWithNewData);

    try {
      const response = await axios.patch("http://localhost:3000/api/users", {
        userWithNewData,
      });

      if (response.status === 201) {
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
          <label>בגרות ממוצעת:</label>
          <input
            type="text"
            value={averageBagrutScore}
            onChange={(e) => setAverageBagrutScore(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>ציון פסיכומטרי:</label>
          <input
            type="text"
            value={psychometricScore}
            onChange={(e) => setPsychometricScore(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>שכר מבוקש:</label>
          <input
            type="text"
            value={wantedSalary}
            onChange={(e) => setWantedSalary(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>שעות שבועיות מבוקשות:</label>
          <input
            type="text"
            value={wantedWeeklyHours}
            onChange={(e) => setWantedWeeklyHours(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>השכלה תיכונית</label>
          <input
            className={styles.checkBox}
            type="checkbox"
            checked={highSchoolGraduate}
            onChange={(e) => setHighSchoolGraduate(e.target.checked)}
          />
        </div>
        {/* <div className={styles.formGroup}>
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
            className={styles.select}
            isMulti
            options={trainingOptions}
            value={training}
            onChange={setTraining}
            getOptionLabel={(e) => e.label}
            getOptionValue={(e) => e.value}
            placeholder="בחר הכשרות"
          />
        </div> */}
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
