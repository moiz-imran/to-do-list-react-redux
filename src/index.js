import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App';
import { Provider } from 'react-redux'

let store = createStore(todoApp);

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);