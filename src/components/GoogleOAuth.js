import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
// in this component, wire up the isSignedIn function
class GoogleAuth extends Component {
	//always remember make the callback functions as arrow functions.abs
	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	componentDidMount() {
		//console.log(props)
		//we should be getting the isSignedIn object

		window.gapi.load('client: auth2', () => {
			//use the client lib to initiaze the oib
			window.gapi.client
				.init({
					clientId: '1042227196480-p5pbjs0geuln4s3fj78ruq5no0f1ihcq.apps.googleusercontent.com',
					scope: 'email'
				}) //RETURNS A PROMISE
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();

					this.onAuthChange(this.auth.isSignedIn.get());

					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		// we said we are gonna recieve the isSignedIn status as a param
		if (isSignedIn) {
			const userId = this.auth.currentUser.get().getId();
			this.props.signIn(userId);
		} else {
			this.props.signOut();
		}
	};

	//whenever the state is changes the component rerenders itself
	renderButton() {
		console.log(this.props.auth);
		switch (this.props.auth.isSignedIn) {
			case true:
				return (
					<button
						className={`btn btn-danger auth-buttons ${this.props.button}`}
						onClick={this.onSignOutClick}
					>
						<h4>Sign Out</h4>
					</button>
				);
			case undefined:
				return null;
			default:
				return (
					<button type="button" class="btn btn-danger btn-lg auth-buttons" onClick={this.onSignInClick}>
						<h4>Sign In</h4>
					</button>
				);
		}
	}
	render() {
		console.log(this.props.auth);
		return <div className="auth-button">{this.renderButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	const { auth } = state;
	return { auth };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
