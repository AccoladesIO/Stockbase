import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router >
        <Routes >
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
