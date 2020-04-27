// Action generators for expenses
import uuid from 'uuid'; 
import database from '../firebase/firebase';
export const addExpense = (expense) => ({
	type:'ADD_EXPENSE',
	expense
});

export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => { 
		const {
			description = '',
			note='',
			amount=0,
			createdAt = 0
		} = expenseData;
		const expense = {description, note, amount, createdAt};
		database.ref('expense').push(expense).then((ref)=>{
			dispatch(addExpense({
				id:ref.key,
				...expense
			}))
		})
	}
}
// Remove Expense
export const removeExpense = ({id}={}) => ({
	type:'REMOVE_EXPENSE',
	id
});
// Edit Expense
export const editExpense = (id,updates) => ({
type:'EDIT_EXPENSE',
id,
updates
})

//Set expenses
export const setExpenses = (expenses) => ({
	type:'SET_EXPENSES',
	expenses
})

export const startSetExpense = () => {
	return (dispatch) => {
	return database.ref('expense').once('value').then((snapshot) => {
		const expenses = [];
		snapshot.forEach(childSnapshot => {
			expenses.push({
				id: childSnapshot.key,
				...childSnapshot.val()
			});
		})
		console.log(expenses);
		dispatch(setExpenses(expenses));
	})
}
}