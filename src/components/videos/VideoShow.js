import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import Header from '../Header';
//use the react player to use this id and play the video

//rule .... each component should fetch its own data
import { fetchVideo } from '../../actions';
class VideoShow extends Component {
	componentDidMount() {
		// it says that this component should fetch its own data
		this.props.fetchVideo(this.props.match.params.id);

		//we did get the data from the video ...

		// for fetching one song we are getting only one song in the state
	}
	playerStyles = () => {
		return {
			width: '100%',
			height: '100%',
			marginTop: '20px'
		};
	};

	renderVideoInfo = () => {
		const { video } = this.props;
		if (!video) return null;

		return (
			<div className="video-info">
				<h6 className="title">{video.snippet.title}</h6>
			</div>
		);
	};
	render() {
		return (
			<React.Fragment>
				<Header />

				<div className="container">
					<div className="row justify-content-center">
						<div className="col-sm-12 col-lg-10">
							<div style={this.playerStyles()}>
								<ReactPlayer
									url={`https://www.youtube.com/watch?v=${this.props.match.params.id}`}
									playing
									controls
									width="100%"
									height="500px"
								/>
							</div>
							{/* <h4 className="title">{this.props.video.snippet.title}</h4> */}
							{this.renderVideoInfo()}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const video = state.videos[ownProps.match.params.id];
	return { video };
};

//in this component i dont have the form ... so i have to render the video and fetch a video on the basis of the id
export default connect(mapStateToProps, { fetchVideo })(VideoShow);

// this is just a basic app
