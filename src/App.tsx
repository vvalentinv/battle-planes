import { useState } from 'react'
import './App.css'
import { Navbar } from './features/navbar'
import { Footer } from './features/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      
        
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer/>
    </>
  )
}

export default App
