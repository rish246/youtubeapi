import _ from 'lodash';
import { FETCH_VIDEOS, FETCH_VIDEO } from '../actions/types';

const INITIAL_STATE = {};

const videosReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_VIDEOS:
			// [{id}, {id}]
			const items = {};
			for (let item of action.payload) {
				items[item.id.videoId] = item;
			}

			return { ...items };

		case FETCH_VIDEO:
			const videoData = { ...action.payload }[0];
			return { [videoData.id]: videoData };

		default:
			return state;
	}
};

// use the id to store the data

export default videosReducer;

// undefined

// type = fetchVideos

//action.payload === is an array

//array of objects

// we did get the
