import styles from "../Styles/CountCompletedTask.module.css";

export default function CountCompletedTask({ countCompletedTask, totalTasks }) {
  return (
    <div className={styles.display}>
      <span className={styles.items}>
        Total Task Completed: {countCompletedTask}/{totalTasks}
      </span>
    </div>
  );
}
