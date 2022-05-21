import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useState } from 'react'
import classes from './ProductCard.module.scss'

const ProductCard = ({ className, data }) => {
  const [image] = data.images
  const [selected, setSelected] = useState(false)
  const selectItem = () => setSelected((prevState) => !prevState)

  return (
    <div className={classNames(classes['card'], className)}>
      <img src={image} alt={data.name} className={classes['card__image']} />
      <h3 className={classes['card__title']}>{data.name}</h3>
      <p className={classes['card__price']}>
        {data.price} USD.
        <span className={classes['card__discount']}>{data.discount} USD.</span>
      </p>
      <button
        onClick={selectItem}
        className={classNames(
          classes['card__button'],
          selected && classes['card__button_selected']
        )}
      >
        {selected ? 'Added' : 'Add to cart'}
      </button>
      <button className={classes['card__like']}>
        <FontAwesomeIcon icon={faHeartRegular}  />
      </button>
    </div>
  )
}

export default ProductCard
