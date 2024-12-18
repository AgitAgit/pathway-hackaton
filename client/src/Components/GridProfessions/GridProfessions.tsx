import React from "react";
import "./GridProfessions.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Ability {
  ability: string;
  description: string;
}

interface Skill {
  skill: string;
  description: string;
}

interface Personality {
  personality: string;
  description: string;
}

export interface ProfessionInterFace {
  name: string;
  description: string;
  categories: string[];
  tags: string[];
  averageSalary: number;
  averageWeeklyHours: number;
  requiredTrainingIds: string[];
  abilities: Ability[];
  skills: Skill[];
  personality: Personality[];
}

const fakeData: ProfessionInterFace[] = [
  {
    name: "מהנדס תוכנה",
    description: "מפתח יישומים תוכנה, אחראי על קידוד, בדיקות ותחזוקה.",
    categories: ["טכנולוגיה", "הנדסה", "פיתוח תוכנה"],
    tags: ["JavaScript", "React", "Node.js"],
    averageSalary: 95000,
    averageWeeklyHours: 40,
    requiredTrainingIds: [
      "605c72ef153207f3c71e5d5a",
      "605c72ef153207f3c71e5d5b",
    ],
    abilities: [
      {
        ability: "פתרון בעיות",
        description: "יכולת לחשוב באופן ביקורתי ולפתור בעיות טכניות.",
      },
      {
        ability: "עבודת צוות",
        description: "עובד היטב עם אחרים בסביבה משתפת פעולה.",
      },
    ],
    skills: [
      {
        skill: "JavaScript",
        description: "שליטה ב-JavaScript וב-frameworkים שלו.",
      },
      {
        skill: "React",
        description: "ניסיון בבניית אפליקציות צד-לקוח באמצעות React.",
      },
    ],
    personality: [
      {
        personality: "אנליטי",
        description: "תשומת לב רבה לפרטים וחשיבה לוגית.",
      },
      { personality: "יצירתי", description: "יכולת למצוא פתרונות חדשניים." },
    ],
  },
  {
    name: "מנהל מוצר",
    description: "אחראי לפיתוח ושיווק מוצרים, החל מהרעיון ועד להשקה.",
    categories: ["עסקים", "ניהול", "שיווק"],
    tags: ["מנהיגות", "אסטרטגיה", "מחקר שוק"],
    averageSalary: 120000,
    averageWeeklyHours: 45,
    requiredTrainingIds: [
      "605c72ef153207f3c71e5d5c",
      "605c72ef153207f3c71e5d5d",
    ],
    abilities: [
      { ability: "מנהיגות", description: "יכולת להוביל צוותים ולקבל החלטות." },
      { ability: "תקשורת", description: "יכולת תקשורת בכתב ובע" },
    ],
    skills: [
      { skill: "ניתוח שוק", description: "ניסיון בניתוח מגמות ונתוני שוק." },
      {
        skill: "שיטת Agile",
        description: "מיומנויות בניהול פרויקטים בשיטת Agile.",
      },
    ],
    personality: [
      {
        personality: "אסטרטגי",
        description: "יכולת לחשוב לטווח הארוך ולקבוע מטרות.",
      },
      { personality: "נחרץ", description: "מקבל החלטות במהרה ובביטחון." },
    ],
  },
  {
    name: "מעצב גרפי",
    description: "מעצב חזותי המייצר תמונות, לוגואים, ועוד.",
    categories: ["עיצוב", "מדיה", "יצירתיות"],
    tags: ["Photoshop", "Illustrator", "עיצוב מודפס"],
    averageSalary: 85000,
    averageWeeklyHours: 40,
    requiredTrainingIds: [
      "605c72ef153207f3c71e5d5e",
      "605c72ef153207f3c71e5d5f",
    ],
    abilities: [
      {
        ability: "יצירתיות",
        description: "יכולת לייצר רעיונות חדשים ומעוררי השראה.",
      },
      {
        ability: "עין לאסתטיקה",
        description: "הבנה מעמיקה של עקרונות עיצוב וקומפוזיציה.",
      },
    ],
    skills: [
      {
        skill: "Photoshop",
        description: "שליטה ב-Photoshop לצורך יצירת גרפיקות.",
      },
      { skill: "Illustrator", description: "ניסיון בעיצוב בעזרת Illustrator." },
    ],
    personality: [
      {
        personality: "יצירתי",
        description: "יכולת לראות את העולם בצורה חדשה ומקורית.",
      },
      {
        personality: "סבלני",
        description: "יכולת לעבוד על פרויקטים עם דקדוק רב ויכולת סבלנות.",
      },
    ],
  },
  {
    name: "מנהל משאבי אנוש",
    description: "אחראי על גיוס עובדים וניהול היחסים עם עובדים בחברה.",
    categories: ["עסקים", "ניהול", "משאבי אנוש"],
    tags: ["גיוס", "מכירות", "ניהול צוות"],
    averageSalary: 100000,
    averageWeeklyHours: 40,
    requiredTrainingIds: [
      "605c72ef153207f3c71e5d60",
      "605c72ef153207f3c71e5d61",
    ],
    abilities: [
      {
        ability: "מנהיגות",
        description: "יכולת להוביל צוותים ולהנחות עובדים.",
      },
      {
        ability: "תקשורת",
        description: "יכולת לנהל שיחות מורכבות ולהעביר מסרים ביעילות.",
      },
    ],
    skills: [
      {
        skill: "גיוס עובדים",
        description: "ניסיון בגיוס עובדים וניהול תהליכי מיון.",
      },
      {
        skill: "ניהול צוותים",
        description: "יכולת להנחות צוותים ולנהל פרויקטים.",
      },
    ],
    personality: [
      { personality: "חברותי", description: "יכולת להתחבר בקלות עם אנשים." },
      {
        personality: "אמפתי",
        description: "הבנת צרכים של עובדים ויכולת להרגיש אותם.",
      },
    ],
  },
  {
    name: "מנהל פרויקטים",
    description: "אחראי על ניהול והובלת פרויקטים בעסק.",
    categories: ["ניהול", "הנדסה", "שירותים"],
    tags: ["תכנון", "ניהול", "מעקב פרויקטים"],
    averageSalary: 110000,
    averageWeeklyHours: 45,
    requiredTrainingIds: [
      "605c72ef153207f3c71e5d62",
      "605c72ef153207f3c71e5d63",
    ],
    abilities: [
      {
        ability: "ארגון",
        description: "יכולת לנהל ולהתארגן על פרויקטים בצורה מסודרת.",
      },
      {
        ability: "מעקב",
        description: "יכולת לעקוב אחרי תהליכים ולוודא שהכל מתבצע לפי המתוכנן.",
      },
    ],
    skills: [
      {
        skill: "ניהול פרויקטים",
        description: "יכולת לנהל פרויקטים מכל היבטיהם.",
      },
      {
        skill: "תיאום צוותים",
        description: "יכולת לתאם ולהנחות צוותים לפתרון בעיות.",
      },
    ],
    personality: [
      {
        personality: "מנהיג",
        description: "יכולת להנחות ולהשפיע על הצוות בצורה החלטית.",
      },
      { personality: "סדר", description: "העדפת עבודות מסודרות ומתוכננות." },
    ],
  },
  {
    name: "עורך דין",
    description: "מייעץ ומייצג לקוחות בעניינים משפטיים.",
    categories: ["חוק", "ייעוץ", "משפטים"],
    tags: ["חוק", "חוזים", "ייצוג משפטי"],
    averageSalary: 150000,
    averageWeeklyHours: 50,
    requiredTrainingIds: [
      "605c72ef153207f3c71e5d64",
      "605c72ef153207f3c71e5d65",
    ],
    abilities: [
      {
        ability: "אנליזה משפטית",
        description: "יכולת לנתח ולפרש חוקים ופסיקות משפטיות.",
      },
      {
        ability: "מיקוד",
        description: "יכולת לעמוד בפני מצבים מלחיצים ולפתור בעיות בצורה יציבה.",
      },
    ],
    skills: [
      { skill: "חוק אזרחי", description: "שליטה בחוקים ובתקנות האזרחיים." },
      {
        skill: "חוק פלילי",
        description: "יכולת לעבוד עם חוקים ופסיקות פליליות.",
      },
    ],
    personality: [
      {
        personality: "מדויק",
        description: "הבנה ויכולת לפרש חוקים בצורה מדויקת.",
      },
      { personality: "עקשן", description: "יכולת להילחם עבור הצדק והאמת." },
    ],
  },
];

const GridProfessions: React.FC<{
  setProfession: (profession: ProfessionInterFace) => void;
}> = ({ setProfession }) => {
  const [favoriteProfessions, setFavoriteProfessions] = useState<string[]>(
    () => {
      const storedFavorites = localStorage.getItem("favoriteProfessions");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
  );

  const navigate = useNavigate();

  const handleFavoriteToggle = (professionName: string) => {
    const updatedFavorites = favoriteProfessions.includes(professionName)
      ? favoriteProfessions.filter((name: string) => name !== professionName)
      : [...favoriteProfessions, professionName];

    setFavoriteProfessions(updatedFavorites);

    localStorage.setItem(
      "favoriteProfessions",
      JSON.stringify(updatedFavorites)
    );
  };

  const handleProfessionClick = (profession: ProfessionInterFace) => {
    setProfession(profession);
    navigate(`/profession/${profession.name}`);
  };

  return (
    <ul className="ul">
      {fakeData.map((profession, index) => {
        const isFavorite = favoriteProfessions.includes(profession.name);

        return (
          <li
            key={index}
            className="li"
            onClick={() => handleProfessionClick(profession)}
          >
            <h1>{profession.name}</h1>
            <p>{profession.description}</p>
            <p>
              <strong>קטגוריות:</strong> {profession.categories.join(", ")}
            </p>
            <p>
              <strong>שכר ממוצע:</strong> ₪{profession.averageSalary}
            </p>
            <div
              className="div"
              onClick={(e) => {
                e.stopPropagation();
                handleFavoriteToggle(profession.name);
              }}
            >
              {isFavorite ? "−" : "+"}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default GridProfessions;
