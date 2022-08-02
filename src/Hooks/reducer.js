//import React from 'react'
//import { FETCH_PRODUCT } from './contants';

function reducer(state, action) {
  if(action.type === 'ADD_TO_CART') {
    const item = action.payload;
    const existitem = state.cart.find((n) => n._id === item._id);
    if(existitem) {
      return {
        ...state,
        cart: state.cart.map((n) => n._id === existitem._id? item : n)
      }
    }
    else {
        return {
          ...state,
          cart: [item, ...state.cart]
        }
    }
  }

  if(action.type === 'ADD_TO_SAVE') {
    const item = action.payload;
    const existitem = state.saved.find((n) => n._id === item._id);
    if(existitem) {
      return {
        ...state,
        saved: state.saved.map((n) => n._id === existitem._id? item : n)
      }
    }
    else {
        return {
          ...state,
          saved: [item, ...state.saved]
        }
    }
  }

  if(action.type === 'REMOVE_ITEM') {
    return{
      ...state,
      cart: action.payload
    }
  }

  if(action.type === 'REMOVE_ITEM-1') {
    return{
      ...state,
      saved: action.payload
    }
  }

  if(action.type === 'AMOUNT'){
    let {amount} = state.cart.reduce((carttotal,cartitem) => {
      const {quantity} = cartitem;
      carttotal.amount += quantity;
      return carttotal;
    }, {
      amount:0
    })
    return {...state, amount}
  }

  if (action.type === 'TOTAL') {
    return{...state, total:action.payload}
  }
  if (action.type === "INCREASE") {
    const item = state.cart.map((product) => {
      if(product._id === action.payload) {
        return {...product, quantity: product.quantity + 1}
      }
      return product;
    })
    
    return {...state, cart:item}
  }
  if (action.type === "DECREASE") {
    const item = state.cart.map((product) => {
      if(product._id === action.payload) {
        return {...product, quantity: product.quantity - 1}
      }
      return product;
    }).filter((product) => product.quantity !== 0)

    return {...state, cart:item}
  }

  if(action.type === "GET_USER") {
    return {
      ...state,
      user: action.payload
    }
  }

  if(action.type === "EMPTY_CART"){
    return{...state, cart:[]}
  }

  if(action.type === "EMPTY_ORDERDETAILS"){
    return{...state, orderdetails:{}}
  }

  
  if(action.type === "EMPTY_ORDERS_R"){
    return{...state, orders:{}}
  }

  if(action.type === "REMOVE_USER"){
    return{...state, user:null}
  }
  if(action.type === "NEW_USER"){
    return{...state, user: action.payload}
  }

  if(action.type === "GET_ORDER"){
    return{...state, orderdetails:action.payload};
  }
  if(action.type === "GETTING_ORDERS"){
    return{...state, orders:action.payload};
  }
  if(action.type === "SUCCESSFUL_PAYMENT"){
    return{...state}
  }

   if(action.type === "PAYMENT_REQUEST"){
    return{...state}
  }

 return state;
}

export default reducer;