import axios from 'axios';

export async function getGifs(searchTerm: string) {
  let config = {
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/search',
    params: {
      q: searchTerm,
      api_key: 'GLym9agNBp8lNCQWODUF6gIUWUDJHLmk',
      limit: 25,
      offset: 0,
      rating: 'g',
      lang: 'en',
    },
  };
  const sendGetRequest = async () => {
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return sendGetRequest();
}
