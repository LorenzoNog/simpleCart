
import React from 'react'
import Inicio from '@/components/inicio'
import { CartProvider } from '@/context/cartContext'

const App = () => {
  return (
    <CartProvider>
      <Inicio/>
    </CartProvider>
  )
}

export default App
