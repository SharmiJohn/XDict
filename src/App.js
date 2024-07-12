import { useState } from "react";

function App() {
  const [value, setvalue] = useState("");
  const [displayvalue, setdisplayvalue] = useState("");
  const [data, setdata] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  const handleClick = () => {
    let lowercase =value.toLowerCase()
    
  const getdata=data.find((datas)=>datas.word.toLowerCase()===lowercase)
  if(getdata){
    setdisplayvalue(getdata.meaning)
  }
  else{
    setdisplayvalue("Word not found in the dictionary.")
  }
    
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div style={{ display: "flex" }}>
        <input
        type="text"
          value={value}
          placeholder="Search for a word..."
          onChange={(e) => setvalue(e.target.value)}
        />
        <button onClick={() => handleClick()}>Search</button>
      </div>
      <h3>Definition:</h3>
      <p>{displayvalue}</p>
    </div>
  );
}

export default App;
