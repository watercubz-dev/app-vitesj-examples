import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { task as data } from "./components/task";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

   function CreateTask(task) {
    setTask([...task, task]);
   }

  return (
    <>
      <TaskForm CreateTask={CreateTask} />
      <TaskList task={task} />
    </>
  );
}

export default App;
