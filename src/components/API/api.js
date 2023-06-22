import axios from 'axios';

const KEY = '36489495-4c4bba821fe5c27fc94c3b861';

const imagesApi = axios.create({
  baseURL: `https://pixabay.com/api/`,
});

export const getData = async (query, page) => {
  const response = await imagesApi.get('', {
    params: {
      key: KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q: query,
      page,
    },
  });
  return response.data;
};
