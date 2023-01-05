import { useRef, useEffect } from 'react'

export default function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef])

  return (
    <div>
      <label htmlFor='focused-input'>Focus me on page load!</label>
      <input ref={inputRef} name='focused-input'></input>
    </div>
  )
}
