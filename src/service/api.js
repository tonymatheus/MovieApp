import axios from "axios";

//url filmes em cartaz
//https://api.themoviedb.org/3

///movie/now_playing?api_key=7bbea00a2df04ac98a6a93be1f6681a8&language=pt-BR&page=1

export const Key = "7bbea00a2df04ac98a6a93be1f6681a8";

export default API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
