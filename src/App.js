import { useState } from "react";
import "./app.css";

function App() {
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [player, setPlayer] = useState("x");
  const [winner,setWinner] = useState('')
  
  const handleClick = (index) => {

    if (typeof item[index] === "number") {
      let newItem = [...item];
      newItem[index] = player;
      setItem(newItem);
      setPlayer(player === "x" ? "o" : "x");
    }
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i]
      if( item[a] === item[b] && item[a] === item[c] && item[b] === item[c] ){
        setWinner(item[a])
      }
    }
  };




  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <p>{winner}</p>
      <div className="container">
        <ul className="wrap">
          <li onClick={() => handleClick(0)}>{item[0]}</li>
          <li onClick={() => handleClick(1)}>{item[1]}</li>
          <li onClick={() => handleClick(2)}>{item[2]}</li>
        </ul>
        <ul className="wrap">
          <li onClick={() => handleClick(3)}>{item[3]}</li>
          <li onClick={() => handleClick(4)}>{item[4]}</li>
          <li onClick={() => handleClick(5)}>{item[5]}</li>
        </ul>
        <ul className="wrap">
          <li onClick={() => handleClick(6)}>{item[6]}</li>
          <li onClick={() => handleClick(7)}>{item[7]}</li>
          <li onClick={() => handleClick(8)}>{item[8]}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
