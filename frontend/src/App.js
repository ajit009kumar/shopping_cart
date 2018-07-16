import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CartView from './views/CartView';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from "./reducers";

injectTapEventPlugin();


const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers,middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
            <CartView />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
