// Filter Actions
// Set text filter
export const setTextFilter = (text='') => ({
type:'SET_TEXT_FILTER',
text
})
//Sort by amount
export const sortByAmount = () => ({
	type:'SORT_BY_AMOUNT'
})
//Sort by date
export const sortByDate = () => ({
	type:'SORT_BY_DATE'
})
export const setStartDate = (startDate) => ({
	type:'SET_START_DATE',
	startDate
}) 
export const setEndDate = (endDate) => ({
	type:'SET_END_DATE',
	endDate
});