import { useState } from "react";
import Form from "./Form";
import To_do_List from "./To_do_List";
import CountCompletedTask from "./CountCompletedTask";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const countCompletedTask = todos.filter((todo) => todo.done).length;
  const totalTasks = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <To_do_List todos={todos} setTodos={setTodos} />
      <CountCompletedTask
        countCompletedTask={countCompletedTask}
        totalTasks={totalTasks}
      />
    </div>
  );
}
