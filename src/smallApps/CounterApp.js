import { useEffect, useState } from "react";
import GobackComponent from "./GobackComponent";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  let date = new Date();
  let date1 = new Date();
  date1.setDate(date1.getDate() + count);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return (
    <div>
      <h3>A simple counter App</h3>

      <p>
        Total count is :<strong> {count} </strong>
        <br />
        Today's date is :<strong> {currentDate} </strong>
        <br />
        {`And on manipulation the date will be `}
        <strong>{date1.toDateString()}</strong>
      </p>
      <br />
      <p>Step is : {step}</p>
      <input
        type="range"
        max={10}
        min={0}
        step={1}
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      />

      <br />
      <button onClick={() => setCount(count + step)}>++</button>
      <button onClick={() => setCount(count - step)}>--</button>
      <button
        onClick={() => {
          setCount(0);
          setStep(1);
        }}
      >
        Reset Counter
      </button>
      <br />
      <GobackComponent>WakeUpToReality</GobackComponent>
    </div>
  );
}

export default CounterApp;
