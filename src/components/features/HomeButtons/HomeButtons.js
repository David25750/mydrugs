import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './HomeButtons.module.scss';
import { Grid } from '@material-ui/core';


const Component = ({className, drugs}) => (
  <div className={clsx(className, styles.root)}>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center">

      <NavLink exact to={`/products/${drugs[6] && drugs[6].category}`} className={styles.link}>
        <Grid item sm={12} className={styles.Box}>
          <img src={drugs[6] && drugs[6].categoryImg} alt={drugs[6] && drugs[6].category} className={styles.imageButton}/>
          <p className={styles.textButton}>{drugs[6] && drugs[6].categoryName}</p>
        </Grid>
      </NavLink>

      <NavLink exact to={`/products/${drugs[12] && drugs[12].category}`} className={styles.link}>
        <Grid item sm={12} className={styles.Box}>
          <img src={drugs[12] && drugs[12].categoryImg} alt={drugs[12] && drugs[12].category} className={styles.imageButton}/>
          <p className={styles.textButton}>{drugs[12] && drugs[12].categoryName}</p>
        </Grid>
      </NavLink>

      <NavLink exact to={`/products/${drugs[0] && drugs[0].category}`} className={styles.link}>
        <Grid item sm={12} className={styles.Box}>
          <img src={drugs[0] && drugs[0].categoryImg} alt={drugs[0] && drugs[0].category} className={styles.imageButton}/>
          <p className={styles.textButton}>{drugs[0] && drugs[0].categoryName}</p>
        </Grid>
      </NavLink>
      <NavLink exact to={`/products/${drugs[9] && drugs[9].category}`} className={styles.link}>
        <Grid item sm={12} className={styles.Box}>
          <img src={drugs[9] && drugs[9].categoryImg} alt={drugs[9] && drugs[9].category} className={styles.imageButton}/>
          <p className={styles.textButton}>{drugs[9] && drugs[9].categoryName}</p>
        </Grid>
      </NavLink>
      <NavLink exact to={`/products/${drugs[3] && drugs[3].category}`} className={styles.firstLink}>
        <Grid item sm={12} className={styles.Box}>
          <img src={drugs[3] && drugs[3].categoryImg} alt={drugs[3] && drugs[3].category} className={styles.imageButton}/>
          <p className={styles.textButton}>{drugs[3] && drugs[3].categoryName}</p>
        </Grid>
      </NavLink>


    </Grid>
  </div>
);
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  drugs: PropTypes.array,
};

//const mapStateToProps = state => ({
//  categories: getCategories(state),
//});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

//const Container = connect(mapStateToProps)(Component);

export {
  Component as HomeButtons,
  //Container as HomeButtons,
  Component as HomeButtonsComponent,
};
