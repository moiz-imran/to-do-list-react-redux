import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App';
import { Provider } from 'react-redux';
import './index.css';
import { loadState, saveState } from './localStorage'

const persistedState = loadState();
const store = createStore(
    todoApp,
    persistedState
);

store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    });
})

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);