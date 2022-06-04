import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'

import Container from '../../layout/Container'
import classes from './Header.module.scss'
import logo from '../../images/Logo.png'
import categories from '../../routes/categories'
import classNames from 'classnames'

const Header = () => {
  const location = useLocation()

  return (
    <header className={classes['header']}>
      <Container className={classes['header__container']}>
        <Link to="/" className={classes['header__logo']}>
          <img src={logo} alt="Floristman" />
        </Link>
        <Link to="/favorite">
          <FontAwesomeIcon
            icon={faHeart}
            className={classes['header__heart']}
          />
        </Link>
        <FontAwesomeIcon
          icon={faBagShopping}
          className={classes['header__bag']}
        />
      </Container>
      <Container>
        <ul className={classes['header__list']}>
          {categories.map(({ link, text }) => (
            <li key={link}>
              <Link
                to={link}
                className={classNames(classes['header__link'], {
                  [classes['header__link_active']]: location.pathname === link,
                })}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}

export default Header
