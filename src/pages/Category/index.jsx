import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DiscountsCarousel from '../../components/DiscountsCarousel'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import classes from './Category.module.scss'

const Category = () => {
  const { type } = useParams()
  const [data, setData] = useState(null)

  useEffect(()=>{
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
      <Container className={classes['cards']}>
        {data &&
          data.map((card) => (
            <ProductCard
              key={card.id}
              data={card}
              className={classes['card-item']}
            />
          ))}
      </Container>
      <DiscountsCarousel/>
    </>
  )
}

export default Category
