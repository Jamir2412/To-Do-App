import { useState } from "react";
import styles from "../Styles/form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name: "", done: false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "", done: false});
  }
  return (
    <form className={styles.addTaskSection} onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <input
          className={styles.inputSection}
          onChange={(e) => setTodo({name: e.target.value, done: false})}
          type="text"
          value={todo.name}
          placeholder="Add your task"
        />
        <button className={styles.addButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
