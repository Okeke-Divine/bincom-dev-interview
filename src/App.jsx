import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* application navbar */}
      <NavBar />
      <div className="app-padding mt-5">
        {/* list */}
        <List />
      </div>
    </>
  )
}

export default App
