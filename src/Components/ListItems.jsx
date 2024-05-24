import styles from "../Styles/listItems.module.css";

export default function ListItems({ item, todos, setTodos }) {
  function handelDelete(item) {
    console.log(item.name, " is Deleted");
    setTodos(todos.filter((todo) => todo !== item));
  }
  function markDone(item) {
    console.log(item.name, " is Completed");
    const newTaskList = todos.map((todo) =>
      todo.name === item.name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTaskList);
  }
  const markTask = item.done ? styles.isDone : "";
  return (
    <div>
      <div className={styles.taskName}>
        <span className={markTask} onClick={() => markDone(item)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handelDelete(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.taskSeperator} />
    </div>
  );
}
