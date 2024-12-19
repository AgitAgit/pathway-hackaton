import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GridProfessions.css";

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

const GridProfessions: React.FC<{
  setProfession: (profession: ProfessionInterFace) => void;
  professions?: ProfessionInterFace[];
}> = ({ setProfession, professions = [] }) => {
  const [favoriteProfessions, setFavoriteProfessions] = useState<
    ProfessionInterFace[]
  >(() => {
    const storedFavorites = localStorage.getItem("favoriteProfessions");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [professionToRender, setProfessionToRender] = useState<
    ProfessionInterFace[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setProfessionToRender(professions);
    };

    getData();
  }, [professions]);

  const handleFavoriteToggle = (profession: ProfessionInterFace) => {
    const isFavorite = favoriteProfessions.some(
      (fav) => fav.name === profession.name
    );
    const isFavoriteIndex = favoriteProfessions.findIndex(
      (fav) => fav.name === profession.name
    );

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favoriteProfessions.filter(
        (fav) => fav.name !== profession.name
      );
      console.log(isFavorite);

      setFavoriteProfessions((prev) => prev.filter((prof) => prof));
    } else {
      updatedFavorites = [...favoriteProfessions, profession];
    }

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
      {professionToRender.length === 0 ? (
        <p>אין מקצועות </p>
      ) : (
        professionToRender.map((profession, index) => {
          const isFavorite = favoriteProfessions.some(
            (fav) => fav.name === profession.name
          );

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
                  handleFavoriteToggle(profession);
                }}
              >
                {isFavorite ? "−" : "+"}
              </div>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default GridProfessions;
