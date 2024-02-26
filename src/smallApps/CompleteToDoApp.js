// import { useContext, useReducer, useState } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import styles from "./CompleteToDoApp.module.css";
// import { registerContext } from "../contexts/registerContext";

let demo = [
  {
    id: 1,
    item: "hit the gym",
    status: true,
    updateStatus: false,
  },
  {
    id: 2,
    item: "gym drink",
    status: false,
    updateStatus: false,
  },
  {
    id: 3,
    item: "lib",
    status: true,
    updateStatus: false,
  },
];

const CompleteToDoApp = function () {
  // const { tasks, setTasks } = useContext(useReducer);
  const [tasks, setTasks] = useState(demo);
  const [taskToAdd, setTaskToAdd] = useState([]);
  const [updateValue, setUpdateValue] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = tasks.filter((task) =>
    task.item
      .toString()
      .toLowerCase()
      .includes(searchQuery.toString().toLowerCase())
  );

  return (
    <div className="">
      <Logo />
      <Form
        tasks={tasks}
        setTasks={setTasks}
        taskToAdd={taskToAdd}
        setTaskToAdd={setTaskToAdd}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <PackingList
        tasks={tasks}
        setTasks={setTasks}
        taskToAdd={taskToAdd}
        setTaskToAdd={setTaskToAdd}
        updateValue={updateValue}
        setUpdateValue={setUpdateValue}
        filteredData={filteredData}
      />
      <Stats />
    </div>
  );
};

function Logo() {
  return (
    <div className="mb-5 bg-secondary p-2">
      <h3 className="text-primary-emphasis  text-center mt-4">
        ___TO DO App___ 📝
      </h3>
    </div>
  );
}
/////////////..................Forms.................................///////////////////

function Form({
  tasks,
  setTasks,
  taskToAdd,
  setTaskToAdd,
  searchQuery,
  setSearchQuery,
}) {
  function handleAddTask(e) {
    e.preventDefault();
    // let num = tasks.length + 1;

    const newItem = {
      id: tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1,
      item: taskToAdd,
      status: false,
      updateStatus: false,
    };

    setTasks([...tasks, newItem]);
    // console.log([...tasks, newItem]);
    setTaskToAdd("");
  }

  return (
    <>
      <div className=" input-form  container w-75 ">
        <form className="d-flex justify-content-evenly col-9 ms-4">
          <label className="text-danger-emphasis  bg-danger-subtle rounded p-2">
            Your Next Task ...
          </label>
          <input
            type="text"
            className="w-50 px-5 rounded-pill"
            placeholder="....List down here 🖊"
            value={taskToAdd}
            onChange={(e) => setTaskToAdd(e.target.value)}
          />
          {/* <select name="" id="">
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select> */}
          <button
            className="w-25 rounded-pill"
            onClick={(e) => handleAddTask(e)}
          >
            Add to list
          </button>
        </form>
      </div>

      <div className="search-form d-flex  container my-4">
        <div className="col-2"></div>
        <input
          className="col-4 fs-5 rounded-pill px-4"
          placeholder="search Your Query here ..."
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="col-5"></div>
        {/* <label className="col-2 ms-4 fs-5 fw-semibold">Search Your Query</label> */}
      </div>
    </>
  );
}
////////////////////................Packing list.........///////

function PackingList({
  tasks,
  setTasks,
  updateValue,
  setUpdateValue,
  filteredData,
}) {
  function handleDeleteItem(e, id) {
    if (
      window.confirm("Are you sure you want to delete this task ?") === true
    ) {
      const TasksAfterDelete = tasks.filter((item) => item.id !== id);
      setTasks(TasksAfterDelete);
    } else {
      setTasks(tasks);
    }
  }

  function handleDoneItem(e, id) {
    const TaskAfterDone = filteredData.map((item) => {
      if (item.id === id) {
        item.status = e.target.checked;
      }
      return item;
    });
    setTasks(TaskAfterDone);
  }

  function handleUpdateItem(e, id) {
    // console.log(id);

    const TaskForUpdate = filteredData.map((item) => {
      if (item.updateStatus) {
        item.item = updateValue;
      }

      if (item.id === id) {
        item.updateStatus = !item.updateStatus;
      }
      return item;
    });
    setTasks(TaskForUpdate);
  }

  function hardReset() {
    if (
      window.confirm(
        "Please stop Procastination and complete the tasks...."
      ) === true
    ) {
      setTasks(demo);
    }
  }

  return (
    <>
      <div className="list-items fs-5 mt-5 w-50 justify-content-start container">
        <ul className="row">
          {filteredData.map((task, index) => {
            return (
              <li key={index} className="row">
                <p className="col-1 fs-5">
                  <input
                    className="fw-bold h-100 w-100"
                    type="checkbox"
                    checked={task.status}
                    onClick={(e) => handleDoneItem(e, task.id)}
                  />
                </p>
                <p className="col-1">{task.id}</p>

                {task.updateStatus ? (
                  <p className="col-4 me-5">
                    <input
                      type="text"
                      className="rounded-pill px-2"
                      defaultValue={task.item}
                      // id={`${task.id}_ID`}
                      onChange={(e) => setUpdateValue(e.target.value)}
                    />
                  </p>
                ) : (
                  <p
                    className={
                      task.status
                        ? "col-4 text-decoration-line-through fw-light"
                        : "col-4 fw-medium"
                    }
                  >
                    {task.item}
                  </p>
                )}

                <p className="col-2">
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDeleteItem(e, task.id)}
                  >
                    Delete
                  </button>
                </p>
                <p className="col-2">
                  <button
                    className={`${
                      task.updateStatus ? "bg-success" : "bg-primary"
                    } btn text-white`}
                    onClick={(e) => handleUpdateItem(e, task.id)}
                  >
                    {task.updateStatus ? "Updated" : "Update"}
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="d-flex justify-content-evenly mb-5 container ">
        <button className="btn btn-danger col-12" onClick={() => hardReset()}>
          Hard Reset
        </button>
      </div>
    </>
  );
}
function Stats() {
  return (
    <div className="w-100 fs-5 bg-dark text-white text-center px-5 py-2 rounded-pill">
      <footer>The Footer is here.</footer>
    </div>
  );
}

export default CompleteToDoApp;
