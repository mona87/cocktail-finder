import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
import FavoriteDrinkList from './components/FavoriteDrinkList';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store',store.getState()));


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/favorites' component={FavoriteDrinkList} />
          </Switch>
      </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));