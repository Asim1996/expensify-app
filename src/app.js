import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter'
import configureStore from './stores/configureStore';
import { startSetExpense } from './actions/expenses';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
// require('dotenv').config()
const store = configureStore();
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById('app'));
		hasRendered = true;
	}
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid))
		store.dispatch(startSetExpense()).then(() => {
			if(history.location.pathname == "/"){
				history.push('/dashboard');
			}
			renderApp();
		})

	} else {
		// console.log("log out");
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
})


