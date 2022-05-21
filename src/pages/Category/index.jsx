import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'

const Category = () => {
  const { type } = useParams()
  return <Header />
}

export default Category
