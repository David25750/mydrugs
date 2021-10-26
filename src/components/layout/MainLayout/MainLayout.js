import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Header } from '../Header/Header';
import Divider from '@material-ui/core/Divider';


import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    <Divider variant="middle" />
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};



export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
