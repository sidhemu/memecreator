import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers';
import App from './components/App';

import { fetchMemes } from './actions';

const composeEnhancers = typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

store.dispatch(fetchMemes());


const mainApp = <Provider store={store}>
                  <App />
                </Provider>


ReactDOM.render(mainApp, document.getElementById('root'));
registerServiceWorker();
