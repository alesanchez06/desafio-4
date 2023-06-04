import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const nombre = "Alejandro";
  const expectativa = "aplicacion de tiendas de cualquier tipo";
  const metas = "Ser capaz de crear paginas web entendiendo cada cosa que uso";
  return (
    <>
      <div>
      <h1>Hola soy {nombre} </h1>
      <p> Quisiera contarte que me gustaria hacer una página o aplicacion sobre {expectativa}</p>
      <p>Contanos que más te gustaría hacer con react? ¿Cuales son tus metas como futuro Devs Front-end? {metas}</p>
      <p>Te animas a escribir estas metas en etiquetas de tipo lista?</p>

         
        {/*<a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
  */}</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
