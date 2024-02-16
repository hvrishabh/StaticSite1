import { useEffect, useState } from "react";
let demo = [
  {
    id: 1,
    task: "hit the gym",
    status: true,
  },
  {
    id: 2,
    task: "gym drink",
    status: true,
  },
  {
    id: 3,
    task: "lib",
    status: true,
  },
];

function TODO() {
  const [taskToAdd, setTaskToAdd] = useState([]);
  const [taskToDelete, setTaskToDelete] = useState("");
  const [tasks, setTasks] = useState(demo);

  function handleAddTask(e) {
    e.preventDefault();

    const numbering = tasks.length + 1;
    const newTask = {
      //   id: new Date().getTime(),
      id: numbering,
      task: taskToAdd,
      status: true,
    };

    setTasks([...tasks, newTask]);

    // demo = [...demo, newTask];
  }
  function handleDeleteTask(id) {
    // console.log(id);
    const deletedTask = tasks.filter((task) => task.id !== id);
    // console.log(deletedTask);
    setTasks(deletedTask);
  }
  return (
    <div>
      <div className="container bg-grey">
        <form className="container" onSubmit={(e) => handleAddTask(e)}>
          <h3>Your To Do App..</h3>
          <input
            type="text"
            placeholder="enter your todo..."
            value={taskToAdd}
            onChange={(e) => setTaskToAdd(e.target.value)}
          />
          <span>
            <button type="submit">ADD</button>
          </span>
        </form>

        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="d-flex">
              <p>{task.id} .</p>
              <p>{task.task}</p>

              <button onClick={() => handleDeleteTask(task.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TODO;
