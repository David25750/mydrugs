/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { getCart, loadCartRequest, saveCartRequest } from '../../redux/cartRedux';
import { compose } from 'redux';
import { connect } from 'react-redux';

export function manageCartStorage(Component) {
  return class extends React.Component {
    static propTypes = {
      loadCart: PropTypes.func,
      saveCart: PropTypes.func,
      cart: PropTypes.object,
    }
    componentDidMount() {
      this.props.loadCart();
    }

    shouldComponentUpdate(prevState) {
      return prevState.cart !== this.props.cart;
    }

    componentDidUpdate() {
      this.props.saveCart(this.props.cart.drugs);
    }

    render() {
      return (
        <Component {...this.props} />
      );

    }
  };
}

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  loadCart: () => dispatch(loadCartRequest()),
  saveCart: data => dispatch(saveCartRequest(data)),
});

const manageCartStorageHOC = compose(
  connect(mapStateToProps, mapDispatchToProps), manageCartStorage
);

export default manageCartStorageHOC;
