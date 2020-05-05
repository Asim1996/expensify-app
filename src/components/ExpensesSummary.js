import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
<<<<<<< HEAD
import {Link} from 'react-router-dom';

=======
>>>>>>> 7cd2635d1687f2f1e529681c9262c27b39b6be3d
const ExpensesSummary = (props) => {
    const expense_word = props.expenses.length == 1 ? 'expense' : 'expenses';
    let expenses_total = expensesTotal(props.expenses);
    expenses_total = numeral(expenses_total/100).format('$0,0.00');
    return (
<<<<<<< HEAD
        <div className="page-header">
            <div className="content-container">
            <h4 className="page-header__title">
                Viewing <span>{props.expenses.length}</span> {expense_word} totalling <span>{expenses_total}</span>
            </h4>
            <div className="page-header__action">
                <Link  className="button" to="/create">Add Expense</Link>
            </div>
            </div>
=======
        <div>
            <h4>
                Viewing {props.expenses.length} {expense_word} totalling {expenses_total}
            </h4>
>>>>>>> 7cd2635d1687f2f1e529681c9262c27b39b6be3d
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // Expenses and Filter Props
        // expenses:state.expenses
        expenses: selectExpenses(state.expenses, state.filters)
        // filters:state.filters
    };
};

export default connect(mapStateToProps)(ExpensesSummary);