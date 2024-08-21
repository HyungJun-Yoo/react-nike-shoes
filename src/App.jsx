import { Routes, Route } from 'react-router-dom'
import './App.css'

import ProductAll from './pages/ProductAll'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
