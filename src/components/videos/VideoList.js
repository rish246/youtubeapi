import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { fetchVideos } from '../../actions';
import Header from '../Header';
class VideoList extends Component {
	renderSearchBar({ input }) {
		return (
			<React.Fragment>
				<input
					type="text"
					className="form-control"
					id="searchbar"
					onChange={input.onChange}
					value={input.value}
				/>
			</React.Fragment>
		);
	}

	onSubmit = (formValues) => {
		console.log(formValues);

		//call the action creator using the search term
		this.props.fetchVideos(formValues.searchTerm);
	};

	/// make a helper function that will render the divs below the search bar

	renderVideos() {
		//render the thumbnails
		const { videos } = this.props;

		if (!videos) return null;
		console.log(videos);

		// use a link to show videos on the /videos/show/id
		const renderVideos = videos.map((video) => {
			return (
				<Link to={`/videos/show/${video.id.videoId}`}>
					<div
						className="video-div"
						key={video.id.videoId}
						style={{
							padding: '10px',
							marginTop: '20px',
							cursor: 'pointer',
							display: 'flex',
							borderRadius: '10px'
						}}
					>
						<img
							id="video-image"
							className="img-thumbnail"
							src={video.snippet.thumbnails.default.url}
							style={{ marginTop: '10px', marginBottom: '10px' }}
						/>
						<h6 className="display-6" style={{ marginTop: '10px', marginLeft: '5px' }}>
							{video.snippet.title}
						</h6>
					</div>
				</Link>
			);
		});
		//appending the url to the end of the Router
		return renderVideos;
	}

	/////////// rendering the list of thumbnails
	render() {
		const { handleSubmit } = this.props;
		return (
			<React.Fragment>
				<Header />
				<form className="form-group pt-5" onSubmit={handleSubmit(this.onSubmit)}>
					<Field name="searchTerm" component={this.renderSearchBar} />
					<button
						className="btn btn-primary"
						id="submit-button"
						style={{ marginLeft: '45%', marginTop: '10px' }}
					>
						Search
					</button>
				</form>

				<div className="video-list">{this.renderVideos()}</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return { videos: Object.values(state.videos) };
};

const wrappedVideoList = reduxForm({
	form: 'searchForm'
})(VideoList);
export default connect(mapStateToProps, { fetchVideos })(wrappedVideoList);

// use reduxForm in this

// use the value in the form of redux form and store the result in a search query

// style them videos
