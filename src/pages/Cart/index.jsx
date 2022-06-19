import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem'
import DiscountsCarousel from '../../components/DiscountsCarousel'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Container from '../../layout/Container'

import classes from './Cart.module.scss'

const Cart = () => {
  const { cart } = useSelector((state) => state)
  const items = Object.values(cart)
  const cartEmpty = items.length === 0
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <>
      <Header />
      <Container className={classes['cards']}>
        {cartEmpty ? (<Title>Cart is empty 😢</Title>) : (<Title className={classes['title']}>Cart</Title>)}
        {!cartEmpty && (
          items.map((card) => (
            <CartItem
              key={card.id}
              {...card}
            />
          ))
        )}
        {!cartEmpty && (
          <div className={classes['total']}>
            <p className={classes['total__description']}>Total:</p>
            <p className={classes['total__amount']}>{total}$</p>
          </div>
        )}
      </Container>
      <DiscountsCarousel />
    </>
  )
}

export default Cart