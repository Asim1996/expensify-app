import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
const ExpensesSummary = (props) => {
    const expense_word = props.expenses.length == 1 ? 'expense' : 'expenses';
    let expenses_total = expensesTotal(props.expenses);
    expenses_total = numeral(expenses_total/100).format('$0,0.00');
    return (
        <div>
            <h4>
                Viewing {props.expenses.length} {expense_word} totalling {expenses_total}
            </h4>
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