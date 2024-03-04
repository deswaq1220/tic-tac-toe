import { useState } from 'react';
import './app.css'

function App() {
  const item = [0,1,2,3,4,5,6,7,8]
  const [text,setText] = useState(item)

  const handleClick = (index) => {
    let newItem = [...text] 
    newItem[index] = 'x'
    setText(newItem)
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <ul className="wrap">
          <li onClick={() => handleClick(0)}>{text[0]}</li>  
          <li onClick={() => handleClick(1)}>{text[1]}</li>
          <li onClick={() => handleClick(2)}>{text[2]}</li>
        </ul>
        <ul className="wrap">
          <li onClick={() => handleClick(3)}>{text[3]}</li>
          <li onClick={() => handleClick(4)}>{text[4]}</li>
          <li onClick={() => handleClick(5)}>{text[5]}</li>
        </ul>
        <ul className="wrap">
          <li onClick={() => handleClick(6)}>{text[6]}</li>
          <li onClick={() => handleClick(7)}>{text[7]}</li>
          <li onClick={() => handleClick(8)}>{text[8]}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
