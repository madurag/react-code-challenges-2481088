import { useState, useEffect, createContext, useContext } from 'react'
import React from 'react'

const UserContext = createContext();

function ColorPicker ({colorSelected}) {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={ () => colorSelected(color) } />)}
    </div>
  )
}

function Pixel () {
  const selection = useContext(UserContext);
  const [color, setColor] = useState(selection.color);

  return <div style={{ height: '20px', width: '20px', backgroundColor: `${color}`, margin: '1px' }} onClick={ () => { setColor(selection.color) } }/>
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {

  const[selection, setSelection] = useState({ cell: '', color: 'lightGrey' });

  // useEffect (() => {
  // }, [selection.color])

  return (
    <UserContext.Provider value={selection}>
      <div>
        <ColorPicker colorSelected={ (c) => setSelection({ cell: selection.cell, color: c})} />
        <Pixels  />
      </div>
    </UserContext.Provider>
  )
}
