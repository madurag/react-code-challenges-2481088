import { useState } from "react";

export default function DarkMode () {
  const [themeName, setTheme] = useState('');

  return (
    <div className={`page ${themeName}`}>
        <button className='dark-mode-button' onClick={() => { setTheme('dark-mode') } }>Dark Mode</button>
        <button className='light-mode-button' onClick={() => { setTheme('') } }>Light Mode</button>
    </div>
  )
}
