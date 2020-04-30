import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'
const Header = (props) => {
	console.log(props);
	return(
		<header>
		<h1>Expensify App</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>		
		<NavLink to="/create" activeClassName="is-active">Create</NavLink>		
		<button onClick = {()=>{props.dispatch(startLogout())}}>Logout</button>
		{/* <NavLink to="/edit/:id" activeClassName="is-active">Edit</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help</NavLink> */}
		</header>
	)
}
export default connect()(Header);
