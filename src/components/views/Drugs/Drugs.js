import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import { NumberInput } from '../../common/NumberInput/NumberInput.js';
import { Select } from '../../features/Select/Select';
import { connect } from 'react-redux';
import { getDrugByOption, fetchPublished } from '../../../redux/drugsRedux';
import { getOptionsByProducts, loadOptionsRequest } from '../../../redux/optionRedux';
import { addToCart } from '../../../redux/cartRedux';
import styles from './Drugs.module.scss';
import Divider from '@material-ui/core/Divider';

class Component extends React.Component  {

  state= {
    value: '',
    amount: 1,
  }
   static propTypes = {
     className: PropTypes.string,
     drug: PropTypes.object,
     options: PropTypes.array,
     match: PropTypes.shape({
       params: PropTypes.shape({
         id: PropTypes.string,
       }),
     }),
     addDrug: PropTypes.func,
     addToCart: PropTypes.func,
     loadProducts: PropTypes.func,
     loadOptionsRequest: PropTypes.func,
   };

   componentDidMount() {
     this.props.loadProducts();
     this.props.loadOptionsRequest();
   }

    handleChange = (event) => {
      this.setState({value: event.target.value});
    };

    updateTextField = (event) => {
      this.setState({amount: parseInt(event.target.value)});
    };

    addDrugToCart = (amount, value) => this.props.addDrug({
      drug: this.props.drug,
      amount: amount,
      value: value });

    render() {
      const { drug, options, className} = this.props;
      const { amount, value } = this.state;

      return (
        <Container className={clsx(className, styles.root)}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography component="p">Price {drug.price}$</Typography>
              <Typography component="h1">{drug.option}</Typography>
              <Typography component="p"> {drug.description}</Typography>
              <FormControl component="fieldset"
                className={styles.select}>
                <FormLabel component="legend">{drug.productSelect}</FormLabel>
                <RadioGroup aria-label={drug.productSelect}
                  name="select"
                  value={value}
                  onChange={this.handleChange}>
                  {options.map( option => (
                    <FormControlLabel
                      key={option.option}
                      value={option.option}
                      control=
                        {<Radio
                          className={styles.radio}
                          style= {{color: '#4682B4'}} />}
                      label={option.option} />
                  ))}
                </RadioGroup>
              </FormControl>
              <span>Amount:&nbsp;
                <NumberInput
                  value={amount}
                  onChange={this.updateTextField}
                />
              </span>
              <Button
                className={styles.button}
                variant="contained"
                onClick={() => this.addDrugToCart( amount, value )}>
                  Add to basket
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select options={options}/>
            </Grid>
          </Grid>
          <Divider variant="middle" className={styles.divider} />
        </Container>
      );
    }
}



const mapStateToProps = (state, props) => ({
  // eslint-disable-next-line indent
  drug: getDrugByOption(state,  props.match.params.id),
  options: getOptionsByProducts(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  addDrug: (arg) => dispatch(addToCart(arg)),
  loadProducts: () => dispatch(fetchPublished()),
  loadOptionsRequest: () => dispatch(loadOptionsRequest()),
});

const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ContainerComponent as Drugs,
  Component as DrugsComponent,
};
