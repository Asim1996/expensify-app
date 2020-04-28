import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter'
import configureStore from './stores/configureStore';
import { startSetExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import './firebase/firebase';
// require('dotenv').config()
const store = configureStore();
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpense()).then(() => {
	ReactDOM.render(jsx, document.getElementById('app'));
})


