import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto'; 
const AxiosInstance = axios.create();

AxiosInstance.get(url)
	.then(
		response => {
			const html = response.data;
			console.log(html);
		}
	)
	.catch(console.error);  