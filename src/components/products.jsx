"use client";
import React, { useContext } from "react";
import { comidas } from "@/data/data";
import Image from "next/image";
import { CartContext } from "@/context/cartContext";

const Products = () => {
  const { addProductToCart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-3 px-[10%] overflow-y-hidden">
      {comidas.map((comida) => {
        return (
          <div
            key={comida.id}
            className="border-[1] p-5 flex flex-col justify-center items-center"
          >
            <Image
              src={comida.imagen}
              width={300}
              height={250}
              className="shadow-md"
              alt="img"
            />
            <div className="flex flex-row items-center mt-2 font-mono">
              <span className="font-bold text-[18px]">{comida.nombre} -</span>
              <span className="font-bold text-[18px]">$ {comida.precio}</span>
            </div>
            <button
              onClick={() => addProductToCart(comida)}
              className="mt-3 text-black font-mono font-bold py-2 px-8 rounded-xl hover:scale-[1.05] bg-gray-300"
            >
              Agregar al carrito
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
