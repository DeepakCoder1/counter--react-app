import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    
    if( count < 15){
      setCount(count + 1)
    }
  }
  const decrease = () => {
    
    if( count > 0){
    
      setCount(count - 1)
    }
   }

  return (
    <>
      <h1>current counter counter {count}</h1>
      <button className='btn' onClick={increase}>Increase</button>
      <button className='btn' onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
