import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <Toaster position="top-center" />
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
