import moment from "moment-timezone";
import { useState } from "react";
// TODO: answer here

const App = () => {
  const currentTime = "01:00:00";
  // Buatlah state dengan nama "timezone" disini
  const [timezone, setimezone] = useState("");
  // TODO: answer here
  const formatedTime = moment(currentTime, "HH:mm:ss");
  const time = moment.tz(formatedTime, timezone).format("HH:mm:ss");
  // TODO: answer here

  return (
    <div>
      <h1>Time converter</h1>
      <h2>Current time: {currentTime}</h2>
      <h2>Converted time: {timezone === "" ? "00:00:00" : time}</h2>
      {/* TODO: answer here */}
      <form>
        <label>convert to:</label>
        {/* TODO: answer here */}
        <select onChange={(e) => setimezone(e.target.value)}>
          <option value={""}>Select timezone</option>
          <option value={"Asia/Tokyo"}>Tokyo</option>
          <option value={"America/New_York"}>New York</option>
          <option value={"Europe/Madrid"}>Madrid</option>
          <option value={"Africa/Cairo"}>Cairo</option>
          <option value={"Australia/Sydney"}>Sydney</option>
        </select>
      </form>
    </div>
  );
};

export default App;
