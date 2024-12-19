// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import styles from "./UserProfile.module.css";
// import EditProfileDialog from "../../Components/EditProfile/EditProfile";

// const UserProfile = () => {
//   const userData = useSelector((state) => state.user.user);
//   console.log(userData);

//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

//   const handleEditProfileClick = () => {
//     setIsEditDialogOpen(true);
//   };

//   const handleCloseEditDialog = () => {
//     setIsEditDialogOpen(false);
//   };

//   if (!userData)
//     return (
//       <div className={styles.userProfile}>
//         <p>משום מה אתה לא מחובר?</p>
//         <Link to="/login">לחץ כאן להתחברות</Link>
//       </div>
//     );

//   return (
//     <div className={styles.userProfile}>
//       <h1>{userData.username}</h1>
//       <p>גיל: {userData.age}</p>
//       <p>תפקיד: {userData.role}</p>

//       <div className={styles.profileSection}>
//         <h2>כישורים</h2>
//         <ul>
//           {userData.skills.map((skill, index) => (
//             <li key={index}>
//               <span>{skill.skill}:</span> {skill.description}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className={styles.profileSection}>
//         <h2>יכולות</h2>
//         <ul>
//           {userData.abilities.map((ability, index) => (
//             <li key={index}>
//               <span>{ability.ability}:</span> {ability.description}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className={styles.profileSection}>
//         <h2>הכשרות</h2>
//         <ul>
//           {userData.training.map((training, index) => (
//             <li key={index}>{training.name}</li>
//           ))}
//         </ul>
//       </div>

//       <button onClick={handleEditProfileClick}>ערוך פרופיל</button>

//       {isEditDialogOpen && (
//         <EditProfileDialog
//           userProfile={userData}
//           onClose={handleCloseEditDialog}
//           setmakeToCheck={() => {}}
//         />
//       )}
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";
import EditProfileDialog from "../../Components/EditProfile/EditProfile";

const UserProfile = () => {
  const userData = useSelector((state) => state.user.user);
  console.log(userData);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
  };

  if (!userData)
    return (
      <div className={styles.userProfile}>
        <p>משום מה אתה לא מחובר?</p>
        <Link to="/login">לחץ כאן להתחברות</Link>
      </div>
    );

  return (
    <div className={styles.userProfile}>
      <h1>{userData.username}</h1>
      <p>
        <span className={styles.keyLabel}>גיל:</span> {userData.age}
      </p>
      <p>
        <span className={styles.keyLabel}>תפקיד:</span> {userData.role}
      </p>
      <p>
        <span className={styles.keyLabel}>בגרות ממוצעת:</span>{" "}
        {userData.averageBagrutScore}
      </p>
      <p>
        <span className={styles.keyLabel}>ציון פסיכומטרי:</span>{" "}
        {userData.psychometricScore}
      </p>
      <p>
        <span className={styles.keyLabel}>שכר מבוקש:</span>{" "}
        {userData.wantedSalary} ש"ח
      </p>
      <p>
        <span className={styles.keyLabel}>שעות שבועיות מבוקשות:</span>{" "}
        {userData.wantedWeeklyHours}
      </p>
      <p>
        <span className={styles.keyLabel}>השכלה תיכונית:</span>{" "}
        {userData.highSchoolGraduate ? "כן" : "לא"}
      </p>

      <div className={styles.profileSection}>
        <h2>כישורים</h2>
        {userData.skills.length > 0 ? (
          <ul>
            {userData.skills.map((skill, index) => (
              <li key={index}>
                <span>{skill.skill}:</span> {skill.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>כרגע אין כישורים</p>
        )}
      </div>

      <div className={styles.profileSection}>
        <h2>יכולות</h2>
        {userData.abilities.length > 0 ? (
          <ul>
            {userData.abilities.map((ability, index) => (
              <li key={index}>
                <span>{ability.ability}:</span> {ability.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>כרגע אין יכולות</p>
        )}
      </div>

      <div className={styles.profileSection}>
        <h2>הכשרות</h2>
        {userData.training.length > 0 ? (
          <ul>
            {userData.training.map((training, index) => (
              <li key={index}>{training.name}</li>
            ))}
          </ul>
        ) : (
          <p>כרגע אין הכשרות</p>
        )}
      </div>

      <button onClick={handleEditProfileClick}>ערוך פרופיל</button>

      {isEditDialogOpen && (
        <EditProfileDialog
          userProfile={userData}
          onClose={handleCloseEditDialog}
          setmakeToCheck={() => {}}
        />
      )}
    </div>
  );
};

export default UserProfile;
