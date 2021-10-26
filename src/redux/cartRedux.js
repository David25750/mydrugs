import axios from 'axios';
export const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';
/* selectors */
export const getCart = ({cart}) => cart;
export const getProductFromCart = ({ cart }, drugId) => cart.drugs.filter(drug => drug._id === drugId)[0];
export const getTotalPrice = ({ cart }) => cart.drugs.reduce((total, drug) => drug.price * drug.amount + total, 0);


/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
const ADD_NOTES = createActionName('ADD_NOTES');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const SEND_ORDER = createActionName('SEND_ORDER');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const changeProductAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const addOrderNotes = payload => ({ payload, type: ADD_NOTES });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const sendOrder = payload => ({ payload, type: SEND_ORDER });

/* thunk creators */
export const newOrderRequest = data => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      let res = await axios.post(
        `${API_URL}/order`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch(sendOrder(res.data));
    } catch (e) {
      dispatch(fetchError(e.message));
    }
  };
};

export const saveCartRequest = data => {
  return () => {
    localStorage.setItem('cart', JSON.stringify(data));
  };
};

export const loadCartRequest = () => {
  return dispatch => {
    let getSavedCart;
    localStorage.getItem('cart') ?
      getSavedCart = JSON.parse(localStorage.getItem('cart')) : getSavedCart = [];
    console.log(localStorage);
    dispatch(fetchSuccess(getSavedCart));

  };

};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        drugs: action.payload ? action.payload : [],
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      const { drugs } = statePart;
      if (drugs.length) {
        let isProductInCart = false;
        for (let item of drugs) {
          if (item._id === action.payload.drug._id) isProductInCart = true;
        }
        return {
          ...statePart,
          drugs: isProductInCart ? [...drugs] : [...drugs, { ...action.payload.drug, amount: action.payload.amount, value: action.payload.value }],
        };
      } else {
        return {
          ...statePart,
          drugs: [{ ...action.payload.drug, amount: action.payload.amount, value: action.payload.value }],
        };
      }
    }
    case CHANGE_AMOUNT: {
      return {
        ...statePart,
        drugs: statePart.drugs.map(drug => {
          if (drug._id === action.payload.id) return { ...drug, amount: action.payload.amount };
          else return drug;
        }),
      };
    }
    case ADD_NOTES: {
      return {
        ...statePart,
        drugs: statePart.drugs.map(drug => {
          if (drug._id === action.payload.id) return { ...drug, notes: action.payload.notes };
          else return drug;
        }),
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        drugs: statePart.drugs.filter(drug => drug._id !== action.payload._id),
      };
    }
    case SEND_ORDER: {
      return {
        ...statePart,
        drugs: [],
      };
    }
    default:
      return statePart;
  }
};
