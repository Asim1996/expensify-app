import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'
const Header = (props) => {
	return (
		<header className="header">
			<div className="content-container">
				<div className="header__content">
					<Link to="/" exact={true} className="header__title">
						<h1>Expensify App</h1>
					</Link>
					<button className="button button--link" onClick={() => { props.dispatch(startLogout()) }}>Logout</button>
				</div>
			</div>
		</header>
	)
}
export default connect()(Header);
