// import { useEffect, useState } from "react";
// import styles from "./SearchProfession.module.css";
// import { jobCategoriesWithIcons } from "../../Components/GridCategories/GridCategories.tsx";
// import GridProfessions from "../../Components/GridProfessions/GridProfessions.tsx";

// const personalityTypes = [
//   "ביצועיסט",
//   "חושב",
//   "מנהיג",
//   "יצירתי",
//   "מעשי",
//   "אנליטי",
//   "דינמי",
//   "סקרן",
//   "אחראי",
//   "שיטתי",
//   "מנומס",
//   "תיאורי",
//   "מקשיב",
//   "דומיננטי",
//   "אסטרטגי",
//   "רגוע",
//   "מעורר השראה",
//   "חברתי",
//   "פותר בעיות",
//   "תומך",
// ];

// const fetchData = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/api/professions");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };

// function SearchProfession({ setProfession }) {
//   const [profession, setProfessions] = useState("");
//   const [category, setCategory] = useState("");
//   const [minSalary, setMinSalary] = useState("");
//   const [weeklyHours, setWeeklyHours] = useState("");
//   const [personalityType, setPersonalityType] = useState("");
//   const [error, setError] = useState("");
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     const data = fetchData().then((res) => {
//       setProfessions(res);
//     });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     switch (name) {
//       case "category":
//         setCategory(value);
//         break;
//       case "minSalary":
//         setMinSalary(value);
//         break;
//       case "weeklyHours":
//         setWeeklyHours(value);
//         break;
//       case "personalityType":
//         setPersonalityType(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleFilter = (e) => {
//     e.preventDefault();
//     if (!category || !minSalary || !weeklyHours || !personalityType) {
//       setError("אנא מלא את כל השדות.");
//       return;
//     }

//     setError("");
//     console.log("קטגוריה:", category);
//     console.log("שכר מינימום:", minSalary);
//     console.log("שעות שבועיות:", weeklyHours);
//     console.log("טיפוס:", personalityType);
//   };

//   const handleSearch = (ev) => {
//     setSearchInput(ev.target.value);
//     setProfessions((prev) =>
//       prev.filter(
//         (profession) =>
//           profession.name.includes(ev.target.value) ||
//           profession.name.startsWith(ev.target.value)
//       )
//     );
//   };

//   return (
//     <div className={styles.searchProfession}>
//       <div className={styles.searchInput}>
//         <input
//           onChange={(ev) => {
//             handleSearch(ev);
//           }}
//           type="text"
//           placeholder="חיפוש מקצוע..."
//         />
//         <ul></ul>
//       </div>
//       <form
//         onSubmit={handleFilter}
//         className={styles.containerSearchInputFilters}
//       >
//         <div className={styles.filters}>
//           <div className={styles.filter}>
//             <label>קטגוריה</label>
//             <select
//               name="category"
//               value={category}
//               onChange={handleInputChange}
//             >
//               <option value="">בחר קטגוריה</option>
//               {jobCategoriesWithIcons.map((category, index) => (
//                 <option key={index} value={category.name}>
//                   {category.icon} {category.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className={styles.filter}>
//             <label>שכר מינימום</label>
//             <input
//               type="number"
//               name="minSalary"
//               placeholder="10000"
//               value={minSalary}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.filter}>
//             <label>שעות שבועיות</label>
//             <input
//               type="number"
//               name="weeklyHours"
//               placeholder="40"
//               value={weeklyHours}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.filter}>
//             <label>טיפוסים שייתכן ויתחברו</label>
//             <select
//               name="personalityType"
//               value={personalityType}
//               onChange={handleInputChange}
//             >
//               <option value="">בחר טיפוס</option>
//               {personalityTypes.map((type, index) => (
//                 <option key={index} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         {error && <div className={styles.error}>{error}</div>}
//         <button type="submit" className={styles.filterButton}>
//           סנן
//         </button>
//       </form>
//       <GridProfessions setProfession={setProfession} professions={profession} />
//     </div>
//   );
// }

// export default SearchProfession;
import { useEffect, useState } from "react";
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

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/professions");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

function SearchProfession({ setProfession }) {
  const [profession, setProfessions] = useState([]);
  const [category, setCategory] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [weeklyHours, setWeeklyHours] = useState("");
  const [personalityType, setPersonalityType] = useState("");
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredProfessions, setFilteredProfessions] = useState([]);

  useEffect(() => {
    const data = fetchData().then((res) => {
      setProfessions(res);
    });
  }, []);

  useEffect(() => {
    if (searchInput) {
      setFilteredProfessions(
        profession.filter(
          (profession) =>
            profession.name.includes(searchInput) ||
            profession.name.startsWith(searchInput)
        )
      );
    } else {
      setFilteredProfessions([]);
    }
  }, [searchInput, profession]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "category":
        setCategory(value);
        break;
      case "minSalary":
        setMinSalary(value);
        break;
      case "weeklyHours":
        setWeeklyHours(value);
        break;
      case "personalityType":
        setPersonalityType(value);
        break;
      default:
        break;
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    if (!category || !minSalary || !weeklyHours || !personalityType) {
      setError("אנא מלא את כל השדות.");
      return;
    }

    setError("");
    console.log("קטגוריה:", category);
    console.log("שכר מינימום:", minSalary);
    console.log("שעות שבועיות:", weeklyHours);
    console.log("טיפוס:", personalityType);
  };

  const handleSearch = (ev) => {
    setSearchInput(ev.target.value);
  };

  const handleResultClick = (profession) => {
    setProfession(profession);
    setSearchInput(profession.name);
    setFilteredProfessions([]); // Clear results after selection
  };

  return (
    <div className={styles.searchProfession}>
      <div className={styles.searchInput}>
        <input
          value={searchInput}
          onChange={handleSearch}
          onFocus={() => setFilteredProfessions(profession)}
          type="text"
          placeholder="חיפוש מקצוע..."
        />
        {filteredProfessions.length > 0 && (
          <div className={styles.searchResults}>
            <ul className={styles.ulSearch}>
              {filteredProfessions.map((profession, index) => (
                <li
                  className={styles.liSearch}
                  key={index}
                  onClick={() => handleResultClick(profession)}
                >
                  {profession.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <form
        onSubmit={handleFilter}
        className={styles.containerSearchInputFilters}
      >
        <div className={styles.filters}>
          <div className={styles.filter}>
            <label>קטגוריה</label>
            <select
              name="category"
              value={category}
              onChange={handleInputChange}
            >
              <option value="">בחר קטגוריה</option>
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
              name="minSalary"
              placeholder="10000"
              value={minSalary}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.filter}>
            <label>שעות שבועיות</label>
            <input
              type="number"
              name="weeklyHours"
              placeholder="40"
              value={weeklyHours}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.filter}>
            <label>טיפוסים שייתכן ויתחברו</label>
            <select
              name="personalityType"
              value={personalityType}
              onChange={handleInputChange}
            >
              <option value="">בחר טיפוס</option>
              {personalityTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" className={styles.filterButton}>
          סנן
        </button>
      </form>
      <GridProfessions setProfession={setProfession} professions={profession} />
    </div>
  );
}

export default SearchProfession;
