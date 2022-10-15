const URL = 'https://api.tvmaze.com';

export async function apiGet(query){

const response = await fetch(`${URL}${query}`).then(res => res.json(),{mode:"no-cors"});

return response;
}

