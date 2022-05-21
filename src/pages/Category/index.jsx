import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import classes from './Category.module.scss'

const Category = () => {
  const { type } = useParams()
  const [data, setData] = useState(null)
  const fetchData = () => {
    fetch('http://localhost:4000/products')
      .then((data) => {
        return data.json()
      })
      .then((cards) => {
        setData(cards)
      })
    console.log(data)
  }
  return (
    <>
      <Header />
      <Container className={classes['cards']}>
        {data &&
          data.map((card) => <ProductCard key={card.id} data={card} className={classes['card-item']} />)}
        <button onClick={fetchData}>FetchData</button>
      </Container>
    </>
  )
}

export default Category
