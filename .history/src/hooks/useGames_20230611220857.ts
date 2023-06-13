import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game { //to be used by GameCard.tsx(used as interface Props)
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //network
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
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