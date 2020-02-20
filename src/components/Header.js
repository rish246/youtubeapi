import React from 'react';
import { Link } from 'react-router-dom';
import GoogleOAuth from './GoogleOAuth';

//import GoogleAuth into header and use it inside the header
const Header = (props) => {
	//return a navbar to the project

	//use Link outside a router

	// i am using it outside a router
	return (
		<nav className="navbar navbar-light" id="main-navbar">
			<Link to="/" className="navbar-brand">
				Youtube
			</Link>

			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link to="/" className="nav-link">
						Videos
					</Link>
				</li>
			</ul>
			<GoogleOAuth button="btn-sm" />
		</nav>
	);
};

export default Header;
