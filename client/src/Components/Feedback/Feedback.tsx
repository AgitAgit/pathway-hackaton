import { useState } from "react";
import styles from "./Feedback.module.css";

function Feedback() {
  const [helpfulCount, setHelpfulCount] = useState(0);
  const [notHelpfulCount, setNotHelpfulCount] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpfulClick = () => {
    if (!hasVoted) {
      setHelpfulCount(helpfulCount + 1);
      setHasVoted(true);
    }
  };

  const handleNotHelpfulClick = () => {
    if (!hasVoted) {
      setNotHelpfulCount(notHelpfulCount + 1);
      setHasVoted(true);
    }
  };

  return (
    <div className={styles.feedbackContainer}>
      <h3 className={styles.feedbackTitle}>האם העזרה הייתה מועילה?</h3>
      <div className={styles.feedbackButtons}>
        <button
          className={`${styles.feedbackButton} ${
            hasVoted ? styles.lowOpacity : ""
          }`}
          onClick={handleHelpfulClick}
          disabled={hasVoted}
        >
          😊 כן
        </button>
        <button
          className={`${styles.feedbackButton} ${
            hasVoted ? styles.lowOpacity : ""
          }`}
          onClick={handleNotHelpfulClick}
          disabled={hasVoted}
        >
          😞 לא
        </button>
      </div>
      <div className={styles.counter}>
        <p>כמה אנשים אמרו שזה עזר: {helpfulCount}</p>
        <p>כמה אנשים אמרו שזה לא עזר: {notHelpfulCount}</p>
      </div>
    </div>
  );
}

export default Feedback;
