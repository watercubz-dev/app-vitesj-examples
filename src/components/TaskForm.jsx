import {useState} from 'react';


function TaskForm({CreateTask}) {

    const [title, setTitle] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        const newTask = {
           title
        }
        CreateTask(newTask)
    }

  return (
   <form onSubmit={handlesubmit}>
     <input 
      placeholder="Esccribe tu tarea"
      onChange={(e) => console.log(e.target.value)}
     />
     <button>Guardar</button>
   </form>
  );
}

export default TaskForm