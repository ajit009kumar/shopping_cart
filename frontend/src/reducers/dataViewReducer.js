import axios from 'axios';
// import default from 'material-ui/RaisedButton/RaisedButton';

// default state

const defaultState = {
  isfetched: false,
  data:[]
}

// reducers
      
export function dataViewReducer(state=defaultState, action){
  switch(action.type){

    case "FETCH_CART_DATA": {
            
    }
      
    default:{
             return state;
    }
  }
}

// actions

export const fetchCartData = () => (dispatch,getState) => {
  axios.get('http://localhost:8000/cartData').then(response => {
    // dispatch({
    //   type:"FETCH_CART_DATA",
    //   data:response.data.cartData
    // })
  }) 
}