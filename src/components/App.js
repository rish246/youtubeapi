import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import LandingPage from '../components/videos/landingPage';
import VideoList from '../components/videos/VideoList';
import VideoShow from '../components/videos/VideoShow';

import history from '../history';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<Route path="/" exact component={LandingPage} />
					<Route path="/videos/list" exact component={VideoList} />
					<Route path="/videos/show/:id" exact component={VideoShow} />
				</div>
			</Router>
		</div>
	);
};

export default App;
