import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {foApp} from './reducers/reducer';
import { createStore } from 'redux';

let store = createStore(foApp,[]);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

store.subscribe(()=>{
    console.log("somthing");
})