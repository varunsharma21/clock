import React, { useState } from "react";

function App() {
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
