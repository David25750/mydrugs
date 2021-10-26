import React from 'react';
import styles from './Popup.module.scss';
import PropTypes from 'prop-types';

const Component = ({ variant = '', children, ...otherProps }) => (
  <div
    {...otherProps}
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  >
    {children}
  </div>
);

Component.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export {
  Component as Popup,
  Component as PopupComponent,
};
