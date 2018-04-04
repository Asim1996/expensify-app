import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './stores/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store=configureStore();
store.dispatch(addExpense({description:'Water bill'}))
// console.log(store.getState());
store.dispatch(addExpense({description:'Gas bill'}))
// console.log(store.getState());
store.dispatch(setTextFilter('water'));
// console.log(store.getState());
 // store.subscribe(() => {
	const state=store.getState();
	const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
   console.log(visibleExpenses); 
// });
// console.log(store.getState());


ReactDOM.render( <AppRouter />,document.getElementById('app'));

