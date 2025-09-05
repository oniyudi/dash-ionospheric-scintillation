import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/img/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/*Div do header*/}
      <div className='color-titles text-amber-50 flex justify-between items-center'>
        <div><img src={logo} alt="" width={100} height={100}/></div>
        <div>Hello world</div>
        <div>Hello world</div>
      </div>
    </div>
  )
}

export default App
