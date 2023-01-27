function TaskList({task}) {

     if (task.length === 0) {
        return <h1>no hay tareas aun</h1>
     }

     return (
       <div>
        {task.map((task) => (
           <div key={task.id}>
             <h1>{task.title}</h1>
             <p>{task.discription}</p>
           </div>
          ))}
       </div>
     )
}

export default TaskList;
