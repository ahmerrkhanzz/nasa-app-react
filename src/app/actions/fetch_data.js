import axios from 'axios'


export default function fetchData() {
	const API_KEY = 'ZTbRW97S05CmDUmwlhYy36McxUeo9DqfHjxCdUI3'
	const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='
	const request = axios.get(END_POINT + API_KEY);  // GET REQUEST

	return { // return plain object with props
		type: 'FETCH_DATA', // Action Type
		payload: request // Action Payload (cargo)
	};
}

