const URL = 'https://api.tvmaze.com';

export async function apiGet(query){

const response = await fetch(`${URL}${query}`).then((res) => res.json());
// eslint-disable-next-line no-shadow
return response;
}

