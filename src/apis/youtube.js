import axios from 'axios';

const KEY = 'AIzaSyAPHNMLXHNDpU2Ab2nDxj9N58ReQFd9oRM';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
