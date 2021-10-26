import React from 'react';
import PropTypes from 'prop-types';
import { HomeButtons } from '../../features/HomeButtons/HomeButtons';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import image2 from '../../images/11.jpg';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/drugsRedux';
import { fetchPublished, getLoadingState } from '../../../redux/drugsRedux';
import styles from './Homepage.module.scss';
import { Grid } from '@material-ui/core';
// import { Splash } from '../Splash/Splash';

class Component extends React.Component {


  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct();
  }
  render() {
    const { className, drugs, loading } = this.props;
    return (
      // loading.active ? <Splash /> : (
      <Container className={clsx(className, styles.root)}>
        <Divider variant="middle" className={styles.divider} />
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} className={styles.TextBox}>
            <img className={styles.image} src={image2} alt="sweets" />
            <h2 className={styles.Maintext}>
              <img src="https://i.postimg.cc/MKGw1KWJ/dangerous-drug-2.png" alt="logo" className={styles.logo} />
            </h2>
          </Grid>
        </Grid>

        <Divider variant="middle" className={styles.divider} />
        <HomeButtons drugs={drugs} />
      </Container>
    );
    // );
  }
}

Component.propTypes = {
  drugs: PropTypes.array,
  className: PropTypes.string,
  loadProduct: PropTypes.func,
  loading: PropTypes.object,
};

const mapStateToProps = (state) => ({
  drugs: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProduct: () => dispatch(fetchPublished()),
});

const ContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  ContainerComponent as Homepage,
  Component as HomepageComponent,
};
