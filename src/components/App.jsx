import React, {useState} from "react";

function App() { 
 var [t,setTime] = useState('Click On Get Time');
 
 function getTime(){
    let Updatetime = new Date().toLocaleTimeString();
    setTime(Updatetime);
    setInterval(getTime,1000);
  }
  
  return (
    <div className="container">
      <h1>{t}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
