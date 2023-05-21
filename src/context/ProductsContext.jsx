import React, { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

export const ProductsContext = React.createContext()

export const ProductsContextProvider = ({ children }) => {
  const [productsId, setProductsId] = useLocalStorageState(
    'productsId',
    {
      defaultValue: []
    }
  )
  return (
    <ProductsContext.Provider value={{ productsId, setProductsId }}>
      {children}
    </ProductsContext.Provider>
  )
}
