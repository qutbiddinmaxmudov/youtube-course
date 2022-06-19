import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

import classes from './CartItem.module.scss'
import { useDispatch } from 'react-redux'
import { addOne, removeFromCart, removeOne } from '../../redux/cart'

const CartItem = ({ images, name, id, quantity, price }) => {
  const dispatch = useDispatch()
  const totalPrice = price * quantity

  const handleRemove = () => dispatch(removeFromCart(id))
  const handlePlus = () => dispatch(addOne(id))
  const handleMinus = () => dispatch(removeOne(id))

  return (
    <div className={classes['cart-item']}>
      <img src={images[0]} alt={name} className={classes['cart-item__image']} />
      <p className={classes['cart-item__name']}>{name}</p>
      <FontAwesomeIcon
        icon={faTrashCan}
        className={classes['cart-item__trash']}
        onClick={handleRemove}
      />
      <div className={classes['cart-item__controller']}>
        <button onClick={handleMinus}>-</button>
        {quantity}
        <button onClick={handlePlus}>+</button>
      </div>
      <p className={classes['cart-item__total']}>{totalPrice} $</p>
    </div>
  )
}

export default CartItem
