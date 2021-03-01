import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.rtl.css'
import './assets/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware,compose} from 'redux'
import reducer from './store/reducers/burgerBuilder';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(thunk)
//   ));
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
//   // این تابع برای وارد کردن reduxDevTooles است
//   // other store enhancers if any

);
const app=(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(
  app,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
