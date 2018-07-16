import React, {Component} from 'react'
import {connect} from 'react-redux';

class Login extends React.Component {
  constructor () {
    super()
    
  }

  componentDidMount () {
    
  }


  render () {
    return(
      <div>
        Login Page
      </div>
      )
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
