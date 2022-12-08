import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routor } from './Components/Allroutes/Routor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <Routor/>
    </div>
  )
}

export default App
