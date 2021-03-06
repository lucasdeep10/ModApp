/* eslint-disable no-unused-vars */
import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])


export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

       
    const addItem = (item, stock) => {
        let inCartList = cartList.find((cartItem) => cartItem.id === item.id);

        if (inCartList) {
            inCartList.stock += stock
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...item, stock }])
        }

    }


    const eraseItem = (id) => {
        setCartList(cartList.filter((i) => i.id !== id))
    }

    const cantItem = () => {
        return cartList.reduce((acum, item) => acum = acum + item.stock, 0)

    }
    
    const sumaPrecioItems = () => {
        return cartList.reduce((acum, item) => acum = acum + item.price, 0)

    }   
  
    const totalPrice = () => {
        return cartList.reduce((acum, item) => (acum += item.price * item.stock), 0)
    }
    //* -- el 0 da el valor inicial -- 


    const eraseCart = () => {
        setCartList([])
    }



    return (
        <CartContext.Provider value={
            {
                cartList,
                addItem,
                eraseCart,
                eraseItem,
                cantItem,
                sumaPrecioItems,
                totalPrice
                
                
                
            }}>

            {children}
        </CartContext.Provider>
    )
    }

        export default CartContextProvider