import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('NamjinKimLink')

  return (
    <>
      <div>
        <h1>Hello</h1>
        <h2>{count}</h2>
      </div>
    </>
  )
}

export default App
