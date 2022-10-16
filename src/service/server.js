import { axios } from "axios";

export const API = axios.create({
  Base_URL: "https://www.themoviedb.org/",
});
