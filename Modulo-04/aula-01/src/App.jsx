import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Botao from './Botao.jsx'

function App() {

  return (
    <main>
      <h1> meu primeiro app</h1>
      <p> feito com react e vite.</p>

      <ul>
     <li>voltar pro curso né pai</li>
     <li>neto é bogodhofe</li>
     <li><Botao /></li>

      </ul>

    </main>
  )
}



export default App
 
