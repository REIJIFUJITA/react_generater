import { useState } from "react";

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

export default function App() {
    const [showStory,setShowStory] = useState(false);
    const [xItem, setXItem] = useState("");
    const [yItem, setYItem] = useState("");
    const [zItem, setZItem] = useState("");
    const [customName,setCustomName] = useState("");
    const [ukus,setUkus]=useState("us");
    
    function generateStory(){
        const xItems = ["Willy the Goblin","Big Daddy","Father Christmas"];
        const yItems = ["the soup kitchen","Disneyland","the White House"];
        const zItems = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
        
        setXItem(randomValueFromArray(xItems));
        setYItem(randomValueFromArray(yItems));
        setZItem(randomValueFromArray(zItems));

        setShowStory(true);    
        
    }
    function handleSubmit(event) {
      event.preventDefault();
      const newName = event.target.changeName.value;
      setCustomName(newName);
    }


    return (
      <>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="customname">Enter custom name:</label>
            <input 
              type="text" 
              placeholder=""
              value={customName}
              onChange={(event) => setCustomName(event.target.value)}
            />
          </form>
          <div>
              <label htmlFor="us">US</label>
              <input type="radio" value="us" onChange={(event) =>setUkus(event.target.value)} checked={ukus === "us"} />
              <label htmlFor="uk">UK</label>
              <input type="radio" value="uk" onChange={(event) =>setUkus(event.target.value)} checked={ukus === "uk"} />
          </div>
        </div>
        <div>
          <button onClick={generateStory}>Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was {ukus !== "uk" ? "94 fahrenheit" : "34 centigrade"} outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            {customName === "" ? "Bob" : customName} saw the whole thing, but was not surprised — {xItem} weighs {ukus !== "uk" ? "300 pounds":"21 stone"}, and it was a hot day.
          </p>
        )}
      </>
    );
}
