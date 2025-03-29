import { AxiosAdapter } from "../adapters/http/axios.adapter";

export const RickAndMortyApi = new AxiosAdapter({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
