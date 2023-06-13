import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform { //console: network
  id: number;
  name: string;
  slug: string;
}

export interface Game { //to be used by GameCard.tsx(used as interface Props)
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; 
  metacritic: number;
  rating_top: number;
}

//pass the below into data hook: but data hooks take only endpoints but make it more flexible like giving Axios request config object
const useGames = (gameQuery: GameQuery) => 
  useData<Game>(
    "/games",
    {
      params: { //these are dependencies array: to change instanly when the user chnages 
        genres: gameQuery.genre?.id, //?. is optional
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;


//bring game interface:here:main functionality of fetching games
//useEffect function:apiClient
//include array of depedencies in useEffect hook:sending request to backend