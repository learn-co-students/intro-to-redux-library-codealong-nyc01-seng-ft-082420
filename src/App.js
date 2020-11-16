import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
		console.log(this.props)
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
		);
	}
}

const msp = state => {
	return {
		items: state.items
	};
	
};

const mdp = dispatch => {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};

export default connect(msp,mdp)(App);
