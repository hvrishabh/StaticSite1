import { useState } from "react";
import GobackComponent from "./GobackComponent";

function DaysCalculator() {
  const [inputdate, setinputDate] = useState("");
  const [inputdate2, setinputDate2] = useState("");
  const dateInput = new Date(inputdate);
  const dateToday = new Date(inputdate2);

  const diffTime = Math.abs(dateInput - dateToday);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffTime + " milliseconds");
  // console.log(diffDays + " days");

  return (
    <div>
      <div>
        <p>Calculate days left between different dates</p>
        <p>
          <p>
            Date 1 :{" "}
            <input
              type="date"
              onChange={(e) => setinputDate2(e.target.value)}
            />
          </p>
          <p>
            Date 2 :{" "}
            <input type="date" onChange={(e) => setinputDate(e.target.value)} />
          </p>
          <label htmlFor="">
            The difference in days is : <label />
          </label>
          <input type="text" value={diffDays} />
        </p>
        <GobackComponent>WakeUpToReality</GobackComponent>
      </div>
    </div>
  );
}

export default DaysCalculator;
