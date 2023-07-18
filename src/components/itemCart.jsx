import React,{useContext} from 'react'
import { CartContext } from '@/context/cartContext'


const ItemCart = ({item}) => {
  const {addProductToCart, deleteProductFromCart} = useContext(CartContext)
  const { id } = item

  return (
    <div className='text-white flex flex-row gap-5 border-b-[1px] py-2'>
        <div className='flex justify-start items-start'>
            <img src={item.imagen} alt='imgcart' className='w-full h-full'/>
        </div>
        <div className='flex flex-col gap-10'>
            <span className='font-bold '>{item.nombre}</span>
            <div className='flex flex-row gap-2'>
                <button onClick={()=> addProductToCart(item)} className='bg-white rounded-xl text-black px-1 text-sm'>
                    Agregar
                </button>
                <button onClick={()=> deleteProductFromCart(item)} className='bg-white rounded-xl text-black px-1 text-sm'>
                    {
                      item.quantity !== 0 ? 'Quitar' : 'Eliminar'
                    }
                </button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <span className=" bg-red-500 rounded-full font-bold px-1 text-[15px] ">{item.quantity}</span>
          <span className='font-bold text-[12px] mt-2'>Total: ${item.precio * item.quantity}</span>
        </div>
    </div>
  )
}

export default ItemCart