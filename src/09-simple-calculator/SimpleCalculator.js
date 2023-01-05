import { useReducer, useState } from 'react'

const initialOps = [
  {
  type: "ADD", 
    numbers: [],
    result: 0,
    completed: false 
  },
  {
    type: "SUBSTRACT",
    numbers: [],
    result: 0,
    completed: false
  }
]

function reducer (state, action) {
  let sum = 0;
  console.log(action);

  switch(action.type) {
    case "ADD" : {
        action.numbers.map((number) => sum += Number(number));
        break;
    }
    case "SUBSTRACT" : {
      action.numbers.map((number) => sum = (sum === 0) ? Number(number) : sum -= Number(number));
        break;
    }
    case "CLEAR" : {
      sum = 0;
      break;
    }
    default : {
      throw new Error("Unknown Operation");      
    }
  }

  return { type: action.type, result: sum, completed: true };
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [ops, dispatch] = useReducer(reducer, initialOps);
  let [selectedNumbers, setSelectedNumbers] = useState([]);
  
  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={ () => { 
              if (selectedNumbers.length > 1) {
                selectedNumbers = [];
              }

              selectedNumbers.push(number);
              setSelectedNumbers(selectedNumbers);
            }
          }>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={ () => { 
            if (selectedNumbers.length > 2) {
              selectedNumbers = [];
            }
            selectedNumbers.push(number);
            setSelectedNumbers(selectedNumbers);
          }
        }>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={ () => { dispatch ( { numbers: selectedNumbers, type: "ADD" }) }}>+</button>
        <button onClick={ () => dispatch ({ numbers: selectedNumbers, type: "SUBSTRACT" })}>-</button>
        <button onClick={ () => dispatch ({ numbers: selectedNumbers, type: "CLEAR" })} >c</button>
      </div>
      <div><h2>Result:{ops.result}</h2></div>
    </div>
  )
}
