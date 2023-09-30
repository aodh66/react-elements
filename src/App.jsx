import { useState } from "react";
import Pet from "./components/Pet";
import dogImg from "./images/dog.webp";
import catImg from "./images/cat.webp";
import pythonImg from "./images/python.webp";
import Btn from "./components/Btn";
import Counter from "./components/Counter";
import "./App.css";

// Variables
let petList = [];
petList = [
  {
    name: "Fido",
    species: "Dog",
    pic: "./images/dog.webp",
  },
  {
    name: "Mog",
    species: "Cat",
    pic: "./images/cat.webp",
  },
  {
    name: "Kaa",
    species: "Python",
    pic: "./images/python.webp",
  },
];
// console.log(petList)

function App() {
  // const [count, setCount] = useState(0)
  let outline = { border: "3px solid white" };
  const [border, setBorder] = useState(outline);
  const [border2, setBorder2] = useState(outline);
  const [border3, setBorder3] = useState(outline);

  return (
    <div>
      <h2 className="petlist-title">Pets</h2>
      <ul className="petlist">
        <li className="dog" style={border}>
          <Pet name={petList[0].name} species={petList[0].species} />
          <img
            className="pet-thumbnail"
            id="pic"
            src={dogImg}
            width="200px"
          ></img>
          <Btn updateColor={setBorder} />
        </li>
        <li className="cat" style={border2}>
          <Pet name={petList[1].name} species={petList[1].species} />
          <img
            className="pet-thumbnail"
            id="pic"
            src={catImg}
            width="200px"
          ></img>
          <Btn updateColor={setBorder2} />
        </li>
        <li className="python" style={border3}>
          <Pet name={petList[2].name} species={petList[2].species} />
          <img
            className="pet-thumbnail"
            id="pic"
            src={pythonImg}
            width="200px"
          ></img>
          <Btn updateColor={setBorder3} />
        </li>
      </ul>
      <div>
        <h2>Counter</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
