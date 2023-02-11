import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <Toaster position="top-center" />
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
