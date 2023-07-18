"use client";
import { CartContext } from "@/context/cartContext";
import React, { useContext, useEffect, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ItemCart from "./itemCart";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    setProductsLength(cart.length);
  }, [cart]);

  const total = cart.reduce(
    (prev, current) => prev + current.quantity * current.precio,
    0
  );

  return (
    <>
      <div className=" flex justify-end items-center">
        <div
          onClick={() => setCartOpen(!cartOpen)}
          className=" flex justify-center items-center p-3 mt-10 mr-5"
        >
          {!cartOpen ? (
            <BsFillCartFill className="text-black cursor-pointer w-[40px] h-[40px] " />
          ) : (
            <AiOutlineClose className="text-white absolute z-[1] cursor-pointer w-[20px] h-[20px] top-[10%] right-[2%]" />
          )}
        </div>
        {!cartOpen && (
          <div className="absolute bg-red-500 rounded-full px-1 right-6 top-9 font-bold text-[12px]">
            {productsLength}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-end items-end mr-5 bg-gray-100">
        {cart && cartOpen && (
          <div className="bg-black rounded-3xl text-white w-[20%] h-[40%] flex flex-col justify-center items-center gap-5  p-3 absolute top-[8%] ">
            <h2 className="text-xl font-bold ">Tu carrito</h2>
            {cart.length === 0 ? (
              <span className="font-light  text-white">
                Tu carrito se encuentra vacío
              </span>
            ) : (
              <div className="text-white overflow-y-scroll">
                {cart.map((item, i) => (
                  <ItemCart item={item} key={i} />
                ))}
              </div>
            )}
            <h2 className=" font-bold ">Total: $ {total}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
