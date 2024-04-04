
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Whishlist from './Pages/Whishlist'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {
 
  return (
    <>
    <Header />
    <Routes>

      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/whishlist' element={<Whishlist/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>


    </Routes>
    <Footer />
    </>
  )
}

export default App
