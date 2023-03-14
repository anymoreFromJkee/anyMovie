const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: '01b53bf5f9fd539f991b823aa20385ea',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
