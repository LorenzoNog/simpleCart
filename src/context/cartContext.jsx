"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cart));
  }, [cart]);

  const addProductToCart = (product) => {
    try {
      const InCart = cart.find((prod) => prod.id === product.id);
      if (InCart) {
        setCart(
          cart.map((prod) => {
            if (prod.id === product.id) {
              return { ...InCart, quantity: InCart.quantity + 1 };
            } else {
              console.log(prod)
              return prod;
            }
          })
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    } catch (error) {
      console.log("Error en el add product to cart context");
    }
  };

  const clearCart = () => {
    setCartList([]);
  };

  const deleteProductFromCart = (product) => {
    try {
      const InCart = cart.find((prod) => prod.id === product.id);

      if (InCart.quantity >= 1) {
        setCart(
          cart.map((prod) => {
            if (prod.id === product.id) {
              return { ...InCart, quantity: InCart.quantity - 1 };
            } else {
              return prod;
            }
          })
        );
      }
      if(InCart.quantity === 0){
        setCart(
          cart.filter((prod) => prod.id !== product.id)
        )
      }
    } catch (error) {
      console.log("error en el delete product from cart context");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, deleteProductFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* 
 try {
            const productsInLS = localStorage.getItem('cartProducts')
            return productsInLS ? JSON.parse(productsInLS) : 'No hay productos para mostrar'
        } catch (error) {
            console.log('error en el getProducts del context')
        }
 
 
 */
