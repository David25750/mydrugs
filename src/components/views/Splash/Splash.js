import React from 'react';
import styles from './Splash.module.scss';

const Component = () => (

  <div className={styles.root}>
    <img
      src={'https://i.postimg.cc/L82z82W7/3221.jpg'}
      alt="my-drugs"
    />
  </div>
);

export {
  Component as Splash,
  Component as SplashComponent,
};
