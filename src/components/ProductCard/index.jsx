import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cart'
import { handleLike } from '../../redux/favorite'
import classes from './ProductCard.module.scss'

const ProductCard = ({ className, data, liked, selected }) => {
  const dispatch = useDispatch()
  const [image] = data.images
  
  const selectItem = () => 
    dispatch(selected ? removeFromCart(data.id) : addToCart(data))
  
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
