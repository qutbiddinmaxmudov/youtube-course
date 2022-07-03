import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useSelector } from 'react-redux'

import useGetData from '../../hooks/useGetData'
import Container from '../../layout/Container'
import ProductCard from '../ProductCard'

import classes from './DiscountsCarousel.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import './DiscountsCarousel.styles.scss'


const DiscountsCarousel = () => {
  const { like, cart: cartItems } = useSelector((state) => state)
  const [data] = useGetData('floristman_discounts')

  return (
    <Container className={classes['discounts']}>
      <h2 className={classes['discounts__title']}>Special Discount</h2>
      {data && (
        <Swiper slidesPerView={4} navigation={true} modules={[Navigation]}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard
                data={item}
                liked={item.id in like}
                selected={item.id in cartItems}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  )
}

export default DiscountsCarousel
