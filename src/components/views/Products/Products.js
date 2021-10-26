import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getDrugsByCategory, fetchPublished } from '../../../redux/drugsRedux.js';
import styles from './Products.module.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

class Component extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    categoryDrugs: PropTypes.array,
    category: PropTypes.array,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    getCategory: PropTypes.func,
    loadProduct:PropTypes.func,
  }

  componentDidMount() {
    this.props.loadProduct();
  }


  render() {
    const { className, categoryDrugs } = this.props;
    return  (
      <Container className={clsx(className, styles.root)}>

        <h2>{categoryDrugs[0] && categoryDrugs[0].categoryName}<img src="https://i.postimg.cc/bNP8rH5r/tablet-2.png" alt="logo" className={styles.logo} /></h2>

        <Divider variant="middle" className={styles.divider} />
        {categoryDrugs.map((drug) => (
          <div key={drug.option}>
            <h3>{drug.name}</h3>
            <NavLink key={drug.option} exact to={`/drug/${drug.option}`}>
              <Card className={styles.Card}>
                <CardMedia
                  className={styles.BoardImg}
                  component="img"
                  image={drug.image}
                  option={drug.option}
                />
                <CardContent className={styles.Content}>
                  <Typography component="h3">{drug.option}</Typography>
                  <Typography component="p" className={styles.description}>
                    {drug.description}
                  </Typography>
                  <Button className={styles.button} variant="outlined" color="primary">Need more ? ; )</Button>
                  <Typography component="p">Price from: {drug.price}$</Typography>
                </CardContent>
              </Card>
            </NavLink>
            <Divider variant="middle" className={styles.divider} />
          </div>
        ))}
      </Container>
    );
  }
}


const mapStateToProps = (state, props) => ({
  categoryDrugs: getDrugsByCategory(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  loadProduct: () => dispatch(fetchPublished()),
});

const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ContainerComponent as Products,
  Component as ProductsComponent,
};
