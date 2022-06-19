import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import Container from '../../layout/Container'
import ProductCard from '../ProductCard'

import classes from './DiscountsCarousel.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import './DiscountsCarousel.styles.scss'
import { useSelector } from 'react-redux'

const DiscountsCarousel = () => {
  const [data, setData] = useState(null)
  const { like, cart: cartItems } = useSelector((state) => state)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/discounts')
      const discounts = await res.json()
      setData(discounts)
    }

    fetchData()
  }, [])

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
