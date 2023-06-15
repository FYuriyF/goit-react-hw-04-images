// import axios from 'axios';

// const KEY = '37019935-79a7ba9790ee520e852c82032';
// const BASE_URL = 'https://pixabay.com/api';

// const apiService = async (query, page) => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         q: query,
//         page,
//         key: KEY,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         per_page: 12,
//       },
//     });

//     return response.data.hits;
//   } catch (error) {
//     throw new Error('Failed to fetch images');
//   }
// };

// export default apiService;

import axios from 'axios';

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=37019935-79a7ba9790ee520e852c82032&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};

export default apiService;
