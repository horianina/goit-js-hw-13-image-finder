const apiKey ='20121520-31007c0d251d9bb7e2efefbf9'
function apiService(searchQuery, page = 1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
  
  return fetch(url)
    .then(res => res.json())
    .then(({ hits }) => hits)

    .catch(error => console.log(error));
}

export default apiService;