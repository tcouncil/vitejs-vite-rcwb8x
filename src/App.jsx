import { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Landing from './Common/Landing';
import Footer from './Common/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app container'>
        <Switch>
          <Route>
            <Landing />
            <Footer />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
