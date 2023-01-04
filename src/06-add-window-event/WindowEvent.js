import { useEffect } from "react"

export default function WindowEvent () {

  useEffect(() => {
    const doubleClickHandler = () => {
      alert('User Double Clicked!');
    }

    window.addEventListener('dblclick', doubleClickHandler);
    
    return () => window.removeEventListener('dblclick', doubleClickHandler);

    }, [])

  return (
    <h2>Window event active</h2>
  )
}
