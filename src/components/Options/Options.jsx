import styles from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, feedback }) => {
const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

return (
    <div className={styles.options}>
    <button onClick={() => updateFeedback('good')}>Good</button>
    <button onClick={() => updateFeedback('neutral')}>Neutral</button>
    <button onClick={() => updateFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
);
};

export default Options;
