import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import ProductAll from './pages/ProductAll'
import Login from './pages/Login'
import Navbar from './component/Navbar'
import PrivateRoute from './Route/PrivateRoute'

function App() {
  const [authenticate, setAuthenticate] = useState(false)

  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route
          path='/login'
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path='/product/:id'
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  )
}

export default App
