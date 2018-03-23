import React, {Component} from 'react';
import ReactDom from 'react-dom';
import App from './App.js'
import store from './redux/store.js';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
ReactDom.render(<Root />, document.getElementById('root'));
registerServiceWorker();
