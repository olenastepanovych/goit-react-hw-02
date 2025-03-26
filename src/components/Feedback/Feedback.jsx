import Notification from '../Notification/Notification';
import styles from '../Feedback/Feedack.module.css';

const Feedback = ({ feedback }) => {
const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

return totalFeedback > 0 ? (
    <div className={styles.feedback}>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {totalFeedback}</p>
    <p>Positive feedback: {positiveFeedback}%</p>
    </div>
) : (
    <Notification message="No feedback given yet" />
);
};

export default Feedback;
