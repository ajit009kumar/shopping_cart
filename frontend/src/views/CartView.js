import React, {Component} from 'react'
import {connect} from 'react-redux';
import { fetchCartData } from '../reducers/dataViewReducer';

class CartView extends React.Component {
  constructor () {
    super()
    
  }

  componentDidMount () {
    const {fetchCartData} = this.props
    fetchCartData();
  }


  render () {
    return(
      <div>
        ShoppingCart
      </div>
      )
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  fetchCartData: () => {
    dispatch(fetchCartData())
  },
 
})

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
