import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Landing from './Common/Landing';
import Footer from './Common/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app container'>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </>
  )
}

export default App
