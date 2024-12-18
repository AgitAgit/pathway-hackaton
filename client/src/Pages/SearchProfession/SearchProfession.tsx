import { useState } from "react";
import styles from "./SearchProfession.module.css";
import { jobCategoriesWithIcons } from "../../Components/GridCategories/GridCategories.tsx";
import GridProfessions from "../../Components/GridProfessions/GridProfessions.tsx";

const personalityTypes = [
  "ביצועיסט",
  "חושב",
  "מנהיג",
  "יצירתי",
  "מעשי",
  "אנליטי",
  "דינמי",
  "סקרן",
  "אחראי",
  "שיטתי",
  "מנומס",
  "תיאורי",
  "מקשיב",
  "דומיננטי",
  "אסטרטגי",
  "רגוע",
  "מעורר השראה",
  "חברתי",
  "פותר בעיות",
  "תומך",
];

function SearchProfession({ setProfession }) {
  const [category, setCategory] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [weeklyHours, setWeeklyHours] = useState("");
  const [personalityType, setPersonalityType] = useState("");

  const handleFilter = () => {
    console.log("קטגוריה:", category);
    console.log("שכר מינימום:", minSalary);
    console.log("שעות שבועיות:", weeklyHours);
    console.log("טיפוס:", personalityType);
  };

  return (
    <div className={styles.searchProfession}>
      <div className={styles.containerSearchInputFilters}>
        <div className={styles.searchInput}>
          <input type="text" placeholder="חיפוש מקצוע..." />
        </div>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <label>קטגוריה</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {jobCategoriesWithIcons.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filter}>
            <label>שכר מינימום</label>
            <input
              type="number"
              placeholder="10000"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
            />
          </div>
          <div className={styles.filter}>
            <label>שעות שבועיות</label>
            <input
              type="number"
              placeholder="40"
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(e.target.value)}
            />
          </div>
          <div className={styles.filter}>
            <label>טיפוסים שייתכן ויתחברו</label>
            <select
              value={personalityType}
              onChange={(e) => setPersonalityType(e.target.value)}
            >
              {personalityTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <button onClick={handleFilter} className={styles.filterButton}>
        סנן
      </button>
      <GridProfessions setProfession={setProfession} />
    </div>
  );
}

export default SearchProfession;
