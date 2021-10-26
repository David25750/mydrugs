import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Cart } from '../../features/Cart/Cart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import manageCartStorageHOC from '../../../HOC/manageCartStorage.js/manageCartStorage';
import background from '../../../components/images/666.jpg';


const CartWithStorageMngmt = manageCartStorageHOC(Cart);


const Component = () => {
  return (
    <div className="background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
      <AppBar
        className={styles.AppBar}
      >
        <Toolbar className={styles.toolbar}>
          <Link to="/" className={styles.login}>
            <img src="https://i.postimg.cc/FH0pwm9C/333.png" alt="logo" className={styles.logo} />
          </Link>

          <Link to="/" className={styles.login}>
            <Typography
              align="center"
              variant="h4"
              className={styles.brand}>
               MyDrugs
            </Typography>
          </Link>
          <CartWithStorageMngmt />
        </Toolbar>
      </AppBar>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};



export {
  Component as Header,
  Component as HeaderComponent,
};
