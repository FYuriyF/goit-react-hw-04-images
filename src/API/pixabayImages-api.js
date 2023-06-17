// import axios from 'axios';

// const KEY = '37019935-79a7ba9790ee520e852c82032';
// const BASE_URL = 'https://pixabay.com/api';

import axios from 'axios';

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=37019935-79a7ba9790ee520e852c82032&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(data);
  return data;
};

export default apiService;

// import axios from 'axios';

// const apiService = async (query, page) => {
//   const { data } = await axios.get(
//     `https://pixabay.com/api/?q=${query}&page=${page}&key=37019935-79a7ba9790ee520e852c82032&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   console.log(data);
//   return data;
// };

// export default apiService;
