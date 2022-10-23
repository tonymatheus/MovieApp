import AsyncStorage from "@react-native-async-storage/async-storage";

//buscar os filmes salvos
export const getMoviesSaves = async (key) => {
  const myMovies = await AsyncStorage.getItem(key);

  let movieSave = JSON.parse(myMovies) || [];

  return movieSave;
};

//salvar um novo filme
export const saveMovie = async (key, newMovie) => {
  let moviesStore = await getMoviesSaves(key);

  //se tiver um filme salvo com esse mesmo ID ou  com  Id duplicado  precisamos ignorar
  const hasMovie = moviesStore.some((item) => item.id === newMovie.id);

  if (hasMovie) {
    console.log("Essee filme já existe na lista ");
    return;
  }
  moviesStore.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStore));
  console.log("filme salvo com sucesso");
};

//deletar algum filme espec[ifico

export const deleteMovie = async (id) => {
  let moviesSaved = await getMoviesSaves("@favoritesave");

  const myMovies = moviesSaved.filter((item) => item.id !== id);

  await AsyncStorage.setItem("@favoritesave", JSON.stringify(myMovies));
  console.log(`Filme deletado`);

  return myMovies;
};

//filtrar se algum item ja esta salvo na lista

export const hasMovie = async (movie) => {
  const movieStored = await getMoviesSaves("@favoritesave");

  const hasMovies = movieStored.find((item) => item.id === movie.id);

  return hasMovies ? true : false;
};
