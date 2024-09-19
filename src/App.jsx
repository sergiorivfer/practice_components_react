import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyFirstComponents } from './componets/MyFirstComponents'
import { SecondComponent } from './componets/SecondComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Fundamentos de React
      </h1>
      <MyFirstComponents/>
      <SecondComponent/>
    </>
  )
};

export default App
