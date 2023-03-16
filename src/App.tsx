import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Error from './pages/Error/Error'
import Faq from './pages/Faq/Faq'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Sneakers from './pages/Sneakers/Sneakers'

function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <Toaster position="top-center"
        toastOptions={
          {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        }
      />
      <Nav></Nav>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/sneakers" element={<Sneakers></Sneakers>} />
          <Route path="/faq" element={<Faq></Faq>} />
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App
