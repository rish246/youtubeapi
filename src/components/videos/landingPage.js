import React, { Component } from 'react';

import GoogleAuth from '../GoogleOAuth';

export default class landingPage extends Component {
	render() {
		return (
			<div className="landing-page">
				<div className="landing-page-heading">Youtube</div>
				<div className="authentication">
					<GoogleAuth />
				</div>
			</div>
		);
	}
}
