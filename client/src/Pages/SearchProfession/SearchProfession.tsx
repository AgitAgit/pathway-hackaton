import { useEffect, useState } from "react";
import styles from "./SearchProfession.module.css";
import { jobCategoriesWithIcons } from "../../Components/GridCategories/GridCategories.tsx";
import GridProfessions from "../../Components/GridProfessions/GridProfessions.tsx";
import { useSelector } from "react-redux";
const personalityTypes = [
  "ביצועיסט",
  "חושב",
  "מנהיג",
  "יצירתי",
  "מעשי",
  "אנליטי",
  "דינמי",
  "סקרנות",
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

function SearchProfession({ setProfession, categoryName }) {
  const [professions, setProfessions] = useState("");
  const [category, setCategory] = useState("");
  const [minSalary, setMinSalary] = useState(0);
  const [personalityType, setPersonalityType] = useState("");
  const [minWeeklyHours, setMinWeeklyHours] = useState(0);
  const [maxWeeklyHours, setMaxWeeklyHours] = useState(100);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isProfileFilterOpen, setIsProfileFilterOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    if (categoryName) {
      fetchData().then((data) => {
        setCategory(categoryName);
        setProfessions(
          data.filter((profession) =>
            profession.categories.includes(categoryName)
          )
        );
      });
    } else {
      fetchData().then((res) => {
        setProfessions(res);
      });
    }
  }, []);

  const handleSearch = async (ev) => {
    const data = await fetchData();
    setProfessions(
      data.filter((profession) => profession.name.includes(ev.target.value))
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "category" && value === "") {
      fetchData().then((data) => {
        setProfessions(data);
      });
    }

    switch (name) {
      case "category":
        setCategory(value);
        break;
      case "minSalary":
        setMinSalary(value);
        break;
      case "minWeeklyHours":
        setMinWeeklyHours(value);
        break;
      case "maxWeeklyHours":
        setMaxWeeklyHours(value);
        break;
      case "personalityType":
        setPersonalityType(value);
        break;
      default:
        break;
    }
  };

  const handleFilter = async (e) => {
    e.preventDefault();

    const data = await fetchData();

    const filteredProfessions = data.filter((profession) => {
      const matchesCategory = category
        ? profession.categories.includes(category)
        : true;
      const matchesSalary = minSalary
        ? profession.averageSalary >= minSalary
        : true;
      const matchesWeeklyHours =
        minWeeklyHours && maxWeeklyHours
          ? profession.averageWeeklyHours >= minWeeklyHours &&
            profession.averageWeeklyHours <= maxWeeklyHours
          : true;
      const matchesPersonalityType = personalityType
        ? profession.personality.some(
            (personality) => personality.personality === personalityType
          )
        : true;

      return (
        matchesCategory &&
        matchesSalary &&
        matchesWeeklyHours &&
        matchesPersonalityType
      );
    });

    setProfessions(filteredProfessions);

    console.log("פילטרים נעשו:");
    console.log("קטגוריה:", category || "לא הוזנה");
    console.log("שכר מינימום:", minSalary || "לא הוזן");
    console.log(
      "שעות שבועיות:",
      minWeeklyHours && maxWeeklyHours
        ? `${minWeeklyHours} - ${maxWeeklyHours}`
        : "לא הוזנו"
    );
    console.log("טיפוס אישיות:", personalityType || "לא הוזן");
  };

  const toggleProfileFilter = () => {
    if (!user) {
      alert("התחבר קודם!");
      return;
    }
    setIsProfileFilterOpen((prev) => !prev);
    if (isProfileFilterOpen) {
      setMinSalary(0);
      setMaxWeeklyHours(100);
      setMinWeeklyHours(0);
    } else {
      setMinSalary(user.wantedSalary);
      setMaxWeeklyHours(+user.wantedWeeklyHours + 10);
      setMinWeeklyHours(+user.wantedWeeklyHours - 10);
    }
  };

  return (
    <div className={styles.searchProfession}>
      <div className={styles.searchInput}>
        <input
          onChange={(ev) => {
            handleSearch(ev);
          }}
          type="text"
          placeholder="חיפוש מקצוע..."
        />
      </div>
      <button onClick={toggleForm} className={styles.filterButton}>
        {!isFormOpen ? "פילטרים" : "סגור פילטרים"}
      </button>
      <form
        onSubmit={handleFilter}
        className={`${styles.containerSearchInputFilters} ${
          isFormOpen ? styles.open : ""
        }`}
      >
        <button
          onClick={toggleProfileFilter}
          className={styles.profileBtnFilter}
        >
          {!isProfileFilterOpen ? "סנן לפי פרופיל" : "כל אופציות הסינון"}
        </button>

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
            <label>בחר מי אתה</label>
            <select
              name="personalityType"
              value={personalityType}
              onChange={handleInputChange}
            >
              <option>בחר טיפוס</option>
              {personalityTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filter}>
            <label>שעות שבועיות </label>
            <div className={styles.weeklyHours}>
              <input
                type="number"
                name="minWeeklyHours"
                placeholder="מ-"
                value={minWeeklyHours}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="maxWeeklyHours"
                placeholder="עד-"
                value={maxWeeklyHours}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button className={styles.filterButton}>סנן</button>
      </form>
      <GridProfessions
        setProfession={setProfession}
        professions={professions}
      />
    </div>
  );
}

export default SearchProfession;
