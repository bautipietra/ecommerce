import { Suspense, useContext, createContext, useEffect } from 'react'
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
import { ProductsContextProvider } from './context/ProductsContext'
import { AuthContextProvider } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

export const ProductsContext = createContext({
  productsId: [],
  setProductsId: (id: number) => {}
})

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
  token: '',
  setToken: (value: string) => {},
  handleLogin: (token: string) => {},
  handleLogout: () => {}
})

function App() {
  const { productsId, setProductsId } = useContext(ProductsContext)
  const { isLoggedIn, handleLogin, handleLogout } =
    useContext(AuthContext)

  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <div className='w-full overflow-x-hidden'>
          <Toaster
            position='top-center'
            toastOptions={{
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff'
              }
            }}
          />
          <Nav></Nav>
          <Suspense fallback={null}>
            <Routes>
              <Route path='/' element={<Home></Home>} />
              <Route
                path='/login'
                element={
                  isLoggedIn ? (
                    <Navigate to='/' replace></Navigate>
                  ) : (
                    <Login></Login>
                  )
                }
              />
              <Route
                path='/register'
                element={
                  isLoggedIn ? (
                    <Navigate to='/' replace></Navigate>
                  ) : (
                    <Register></Register>
                  )
                }
              />
              <Route
                path='/sneakers'
                element={<Sneakers></Sneakers>}
              />
              <Route path='/faq' element={<Faq></Faq>} />
              <Route path='*' element={<Error></Error>} />
            </Routes>
          </Suspense>
          <Footer></Footer>
        </div>
      </ProductsContextProvider>
    </AuthContextProvider>
  )
}

export default App
