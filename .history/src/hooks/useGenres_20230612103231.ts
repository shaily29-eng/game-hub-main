import genres from "../data/genres";

export interface Genre { //https://api.rawg.io/docs/#operation/genres_list
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null }) //defining function

export default useGenres;

//linked to fecth api from useData.