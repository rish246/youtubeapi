import youtube from '../apis/youtube';
import { SIGN_IN, SIGN_OUT, FETCH_VIDEOS, FETCH_VIDEO } from './types';

const API_KEY = 'AIzaSyAPHNMLXHNDpU2Ab2nDxj9N58ReQFd9oRM';
export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: { userId }
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

// we are getting the userId and pasting it inside the ids

// create an action creator that can make requests to youtube api and take the param to find for the val
export const fetchVideos = (searchParam) => async (dispatch) => {
	try {
		const response = await youtube.get('/search', {
			params: {
				part: 'snippet',
				q: searchParam,
				key: API_KEY
			}
		});

		console.log(response.data);

		dispatch({
			type: FETCH_VIDEOS,
			payload: response.data.items
		});
	} catch (error) {
		console.log(error);
	}
};

// getState => checkSignIn process
// getState ........... which is not doing this [ this is just a match ]

export const fetchVideo = (videoId) => async (dispatch) => {
	try {
		const response = await youtube.get('/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				key: API_KEY,
				id: videoId
			}
		});

		const video = response.data.items;
		// const video = videos.find((video) => video.id.videoId === videoId);
		dispatch({
			type: FETCH_VIDEO,
			payload: video
		});
	} catch (error) {
		console.log(error);
	}
};
