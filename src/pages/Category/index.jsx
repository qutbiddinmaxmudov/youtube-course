import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import DiscountsCarousel from '../../components/DiscountsCarousel'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title'
import Container from '../../layout/Container'
import categories from '../../routes/categories'
import classes from './Category.module.scss'

const Category = () => {
  const { type } = useParams()
  const { pathname } = useLocation()
  const [data, setData] = useState(null)
  const { like } = useSelector((state) => state)
  const { text: title } = categories.find((item) => item.link === pathname)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4000/products?category=${type}`)
      const cards = await res.json()
      setData(cards)
    }

    fetchData()
  }, [type])

  return (
    <>
      <Header />
      {title && <Title>{title}</Title>}
      <Container className={classes['cards']}>
        {data &&
          data.map((card) => (
            <ProductCard
              key={card.id}
              data={card}
              className={classes['card-item']}
              liked={card.id in like}
            />
          ))}
      </Container>
      <DiscountsCarousel />
    </>
  )
}

export default Category
