import { useEffect, useState } from "react";
import styles from "./TODO.module.css";

const { taskdone } = styles;
let demo = [
  {
    id: 1,
    task: "hit the gym",
    status: true,
    updateStatus: false,
  },
  {
    id: 2,
    task: "gym drink",
    status: false,
    updateStatus: false,
  },
  {
    id: 3,
    task: "lib",
    status: true,
    updateStatus: false,
  },
];

function TODO() {
  const [taskToAdd, setTaskToAdd] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState(demo);
  const [updateValue, setUpdateValue] = useState();
  // const [checked, setChecked] = useState(false);

  function handleAddTask(e) {
    e.preventDefault();

    const numbering = tasks.length + 1;

    const newTask = {
      //   id: new Date().getTime(),
      //   id: numbering,
      id: numbering,
      task: taskToAdd,
      status: false,
    };

    setTasks([...tasks, newTask]);
    setTaskToAdd("");
  }
  function handleDeleteTask(id) {
    // console.log(id);
    const deletedTask = tasks.filter((task) => task.id !== id);
    // console.log(deletedTask);
    setTasks(deletedTask);
  }

  //   function searchSomething(e) {
  //     e.preventDefault();
  //     console.log(e.target.value);
  //   }

  function handleStatus(e, id) {
    // console.log(e.target.checked, id);
    const handleStatusTask = tasks.map((task) => {
      if (task.id === id) {
        task.status = e.target.checked;
      }
      return task;
    });
    setTasks(handleStatusTask);
    // console.log(tasks);
  }

  function handleUpdateTask(e, id) {
    const handleUpdateTasklist = tasks.map((task) => {
      if (task.updateStatus) {
        task.task = updateValue;
      }

      if (task.id === id) {
        task.updateStatus = !task.updateStatus;
      }
      return task;
    });
    setTasks(handleUpdateTasklist);
    // console.log(tasks);
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
        <br />
        <div className="input-box">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search user"
          />
        </div>
        <br />

        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="d-flex">
              <p>{task.id} .</p>
              <p>
                <input
                  onChange={(e) => handleStatus(e, task.id)}
                  type="checkbox"
                  checked={task.status}
                />
              </p>

              {task.updateStatus ? (
                <p>
                  <input
                    type="text"
                    // id={`${task.id}_ID`}
                    defaultValue={task.task}
                    onChange={(e) => setUpdateValue(e.target.value)}
                  />
                </p>
              ) : (
                <p className={task.status ? taskdone : ""}>{task.task}</p>
              )}
              {/* <p className={task.status ? taskdone : ""}>{task.task}</p> */}
              <button onClick={() => handleDeleteTask(task.id)}>x</button>
              <button onClick={(e) => handleUpdateTask(e, task.id)}>
                {task.updateStatus ? "Update-Done" : "Update"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TODO;
