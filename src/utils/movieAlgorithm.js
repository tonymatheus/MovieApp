//gerar uma lista de filmes com o tamanho que eu desejar
//

export const getListMovies = (size, movies) => {
  const getPopularMovies = [];

  for (let i = 0, l = size; i < l; i++) {
    getPopularMovies.push(movies[i]);
  }

  return getPopularMovies;
};
