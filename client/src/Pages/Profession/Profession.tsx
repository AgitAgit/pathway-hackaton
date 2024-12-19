import styles from "./Profession.module.css";

function Profession({ profession }) {
  return (
    <div className={styles.professionContainer}>
      <h1 className={styles.professionTitle}>{profession.name}</h1>
      <p className={styles.professionDescription}>{profession.description}</p>

      <div className={styles.professionSections}>
        <div className={styles.salaryInfo}>
          <h2>נתונים</h2>
          <p>שכר ממוצע: ₪{profession.averageSalary.toLocaleString()}</p>
          <p>שעות עבודה שבועיות ממוצעות: {profession.averageWeeklyHours}</p>
        </div>
        <div className={styles.section}>
          <h2>קטגוריות</h2>
          <ul>
            {profession.categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>תגיות</h2>
          <ul>
            {profession.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>כישורים</h2>
          <ul>
            {profession.skills.map((skill, index) => (
              <li key={index}>
                {skill.skill}
                <div className={styles.details}>
                  <p>{skill.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>יכולות</h2>
          <ul>
            {profession.abilities.map((ability, index) => (
              <li key={index}>
                {ability.ability}
                <div className={styles.details}>
                  <p>{ability.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>אישיות</h2>
          <ul>
            {profession.personality.map((trait, index) => (
              <li key={index}>
                <strong>{trait.personality}:</strong> {trait.description}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>דרישות השכלה</h2>
          <ul>
            {profession.requiredTrainingIds.map((training, index) => (
              <li key={index}>
                <strong>{training.name}</strong> - {training.durationMonths}{" "}
                חודשים
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profession;
