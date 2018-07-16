import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CartView from './views/CartView';
import Login from './views/Login';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from "./reducers";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';


injectTapEventPlugin();


const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers,middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path = "/" component = {Login} />
            <Route  exact path="/cart" component={CartView}  /> 
          </div>
        </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
