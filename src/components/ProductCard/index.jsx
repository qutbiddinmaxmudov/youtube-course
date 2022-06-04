import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleLike } from '../../redux/favoriteSlice'
import classes from './ProductCard.module.scss'

const ProductCard = ({ className, data, liked }) => {
  const dispatch = useDispatch()
  const [image] = data.images
  const [selected, setSelected] = useState(false)
  const selectItem = () => setSelected((prevState) => !prevState)

  const handleLikeButtonClick = () => dispatch(handleLike(data))

  return (
    <div className={classNames(classes['card'], className)}>
      <img src={image} alt={data.name} className={classes['card__image']} />
      <h3 className={classes['card__title']}>{data.name}</h3>
      <p className={classes['card__price']}>
        {data.price} USD.
        {data.discount && (
          <span className={classes['card__discount']}>
            {data.discount} USD.
          </span>
        )}
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
      <button className={classes['card__like']} onClick={handleLikeButtonClick}>
        <FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular} />
      </button>
    </div>
  )
}

export default ProductCard
