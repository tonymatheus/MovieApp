//gerar uma lista de filmes com o tamanho que eu desejar
//

export const getListMovies = (size, movies) => {
  const getPopularMovies = [];

  for (let i = 0, l = size; i < l; i++) {
    getPopularMovies.push(movies[i]);
  }

  return getPopularMovies;
};

//gerar um numero aleatorio com base no tamanho da lista  de  filmes  que  eu passar

export const randomBanner = (movies) => {
  const randomNumber = Math.random();
  return Math.floor(randomNumber * movies.length);
};
