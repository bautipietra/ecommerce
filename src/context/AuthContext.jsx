import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Navigate, redirect } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'

export const AuthContext = React.createContext()

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorageState(
    'session',
    {
      defaultValue: false
    }
  )
  const [token, setToken] = useLocalStorageState('token', {
    defaultValue: null
  })

  useEffect(() => {
    // Verify if there is a token in local storage
    if (token && isLoggedIn) {
      handleSession(token)
    }
  }, [])

  const handleSession = async (token) => {
    try {
      const res = await fetch('http://localhost:3000/user/renew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token
        })
      })
      const data = res.json()
      if (data?.token) {
        const json = JSON.stringify(data.token)
        setToken(json)
      } else {
        console.log('no entre')
        handleLogout()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = (newToken) => {
    setToken(newToken)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setToken(null)
    setIsLoggedIn(false)
    toast.success('Logged out successfully')
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        handleLogin,
        handleLogout
      }}>
      {children}
    </AuthContext.Provider>
  )
}
