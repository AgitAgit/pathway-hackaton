import { useEffect, useState } from "react";
import styles from "./FavoritesPage.module.css";
import GridProfessions from "../../Components/GridProfessions/GridProfessions.tsx";

function FavoritesPage({ setProfession }) {
  const [favoriteProfessions, setFavoriteProfessions] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteProfessions")) || [];
    setFavoriteProfessions(savedFavorites);
  }, []);

  return (
    <div className={styles.favoritesPage}>
      <h1 className={styles.title}>המועדפים שלי</h1>
      {favoriteProfessions.length === 0 ? (
        <p>אין לך מקצועות מועדפים כרגע.</p>
      ) : (
        <GridProfessions
          professions={favoriteProfessions}
          setProfession={setProfession}
        />
      )}
    </div>
  );
}

export default FavoritesPage;
