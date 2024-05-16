import { useState } from 'react'
import './App.css'
import Header from './Layouts/Header'
import About from './Pages/Client/About'
import Shop from './Pages/Client/Shop'
import Home from './Pages/Client/Home'
import Footer from './Layouts/Footer'
import { Route, Routes } from 'react-router'
import Products from './Pages/Admin/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>

<Route path="/" element={<Home/>} />
<Route path="/shop" element={<Shop/>} />
<Route path="/about" element={<About/>} />
<Route path="/products" element={<Products/>} />

    </Routes>
 <Footer/>

    </>
  )
}

export default App
