import React, { Children } from 'react'
import CartContext from './cart-context'

const CartProvider = ({Children}) => {
  return (
    <CartContext.Provider >
      {Children}
    </CartContext.Provider>
  );
};

export default CartProvider