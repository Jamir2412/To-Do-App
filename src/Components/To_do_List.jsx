import ListItems from "./ListItems";
import styles from "../Styles/todoList.module.css";
export default function To_do_List({ todos, setTodos }) {
  const sortedList = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedList.map((item) => (
        <ListItems
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
