export default function Color ({ hex, name, colorChanged }) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick={ () => { colorChanged(hex) }}
    >
      <h2>{name}</h2>
    </button>
  )
}
