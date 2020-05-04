import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
            <h1 className="box-layout__title">Expenses Investment Tracker</h1>
            <p>Get control of your expenses</p>
            <button onClick={startLogin} className="box-layout__button">Login with Google</button>
            </div>
        </div>
    )

}
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);