import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerContext } from "../contexts/registerContext";

function CounterApp() {
  const [count, setCount] = useState(0);

  const [click, setClick] = useState();
  const navigate = useNavigate();
  const { showApp, setShowApp } = useContext(registerContext);

  function goback() {
    navigate("/demo");
    setShowApp(false);
  }

  // useEffect(() => {
  //   setCount(count + 1);
  // }, [click]);
  return (
    <div>
      <h3>A simple counter App</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count - 1)}>--</button>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <br />
      <button onClick={goback}>go back</button>
    </div>
  );
}

export default CounterApp;
