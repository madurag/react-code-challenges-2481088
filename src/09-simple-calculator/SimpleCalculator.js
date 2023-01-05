import { useEffect, useReducer } from 'react'

const initialState = {
  number1: 0,
  number2: 0,
  result: 0
}

function reducer (state, action) {
  switch (action.type) {
    case "NUMBER_1" : {
      state.number1 = action.num;
      break;
    }
    case "NUMBER_2" : {
      state.number2 = action.num;
      break;
    }
    case "ADD" : {
      state.result = state.number1 + state.number2;
      break;
    }
    case "SUBTRACT" : {
      state.result = state.number1 - state.number2;
      break;
    }
    case "CLEAR" : {
      state = initialState;
    }
    default: {
      break;
    }
  }

  return {...state};
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({ num: number, type: "NUMBER_1" })}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={ () => dispatch({ num: number, type: "NUMBER_2"})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={ () => dispatch({ type: "ADD"})}>+</button>
        <button onClick={ () => dispatch({ type: "SUBTRACT" })}>-</button>
        <button onClick={ () => dispatch({ type: "CLEAR" })}>c</button>
      </div>
      <div><h2>Result:{state.result}</h2></div>
    </div>
  )
}