import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleOAuth';

export default class landingPage extends Component {
	renderVideoWatchButton() {
		return (
			<Link to="/videos/list" className="btn btn-outline-light">
				Watch videos
			</Link>
		);
	}
	render() {
		return (
			<div className="landing-page">
				<div className="landing-page-heading">
					<h1 className="display-1">Youtube</h1>
				</div>
				<div className="landing-page-buttons">
					<GoogleAuth />
					{this.renderVideoWatchButton()}
				</div>
			</div>
		);
	}
}

/// improve the styling on the landing page and add a button to

// lets render a descriptions for covering up the space

// Its a simple youtube searching app.
//
