import axios from 'axios';

export const getBooks = (url: string) => axios.get(url).then(res => res.data);
