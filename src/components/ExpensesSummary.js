import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

const ExpensesSummary = (props) => {
    const expense_word = props.expenses.length == 1 ? 'expense' : 'expenses';
    let expenses_total = expensesTotal(props.expenses);
    expenses_total = numeral(expenses_total/100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
            <h4 className="page-header__title">
                Viewing <span>{props.expenses.length}</span> {expense_word} totalling <span>{expenses_total}</span>
            </h4>
            <div className="page-header__action">
                <Link  className="button" to="/create">Add Expense</Link>
            </div>
            </div>
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