import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart, getTotalPrice } from '../../../redux/cartRedux.js';
import { NavLink } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';
import styles from './Cart.module.scss';
import { countProductsInCart } from '../../../utils/countProductsInCart.js';
import Button from '@material-ui/core/Button';


const Component = ({ cart, total }) => {
  const [opened, setOpened] = useState(false);
  const handleClick = e => {
    setOpened(!opened);
  };

  return (
    <div>
      <div className={styles.cartlink}>
        <span1>
          {total}$
        </span1>
        <Button
          className={styles.shop}
          color="inherit"
          startIcon={<img src="https://i.postimg.cc/fW5M0HPJ/click-basket-4.png" alt="logo" className={styles.logo} />}

          onClick={(e) => handleClick(e)}
        >
          <p1>Your drugs</p1>
        </Button>
      </div>
      {opened ? (
        <div className={`${styles.root} ${opened ? styles.expanded : ''}`}>
          <div onClick={(e) => handleClick(e)} className={`${styles.background}`}></div>
          <div className={`${styles.cart}`}>
            <div className={styles.items}>
              {cart.drugs.length ? (cart.drugs.map(drug => (
                <CartItem id={drug._id} key={drug._id} />
              ))) :
                (
                  <small className={styles.noProducts}>
                    <i>Sorry... this place is empty : (</i>
                  </small>
                )
              }
            </div>
            <div className={styles.summary}>
              <p>

                Details of your orders
              </p>
              <div>
                <span>amount of products:</span>
                <span>{countProductsInCart(cart.drugs)}</span>
              </div>
              <div>
                <span>Order value: </span>
                <span>{total} $</span>
              </div>
              <NavLink className={styles.linkContinue} exact to="/order">
                <Button
                  className={styles.button}
                  variant="contained"
                  disabled={cart.drugs.length ? false : true} onClick={(e) => handleClick(e)}>

                    Continue shopping
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.object,
  total: PropTypes.number,
  expanded: PropTypes.bool,
  drug: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: getCart(state),
  total: getTotalPrice(state),
});

const Container = connect(mapStateToProps, null)(Component);

export {
  Container as Cart,
  Component as CartComponent,
};
