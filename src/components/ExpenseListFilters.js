import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate } from '../actions/filters'
import {DateRangePicker } from 'react-dates';
// We have access to dispatch too as props
class  ExpenseListFilters extends Component{
	constructor(props){
		super(props);
		this.state = {
			calendarFocused:null
		};
		this.onDatesChange = this.onDatesChange.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
	}
	// state = {
	// 	calendarFocused:null
	// };
	onDatesChange = ({startDate, endDate}) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	} 
	onFocusChange = (calendarFocused) => {
		this.setState (() => ({calendarFocused}));
	}
	render(){
		return (
			<div>
			<input type="text" value={this.props.filters.text} onChange={(e) => {
				this.props.dispatch(setTextFilter(e.target.value))
				
			}}/>
			<select value={this.props.filters.sortBy}  onChange={(e) => {
				e.target.value==='amount'? this.props.dispatch(sortByAmount()):this.props.dispatch(sortByDate())
			}}>
				<option value="date">Date</option>
				<option value="amount">Amount</option>	
			</select>
			<DateRangePicker 
			startDate={this.props.filters.startDate}
			endDate={this.props.filters.endDate}
			onDatesChange={this.onDatesChange}
			focusedInput ={this.state.calendarFocused}
			onFocusChange = {this.onFocusChange}
			showClearDates = {true}
			numberOfMonths = {1}
			isOutsideRange={() => false}
			/>
		</div>
			)
	};
}
		
	
const mapStateToProps = (state) => 	{
	return {
		filters:state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);	