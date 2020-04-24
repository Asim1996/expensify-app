

export default (expenses) => {
    return expenses.map((expense) => {
        return expense.amount
    }).reduce((accumulator, currentvalue) => {
        return accumulator + currentvalue;
    }, 0)
}