import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
// import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6]; //not state variable reqd here as it will not change over time:so declared as constant/local variable

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} //small device 1 column, medium,large,xlarge
      padding="10px" //space from edges/borders
      spacing={6} //between the gameCards displayed in page!
    >
      {isLoading && //{/*wrapping the skeleton in GameCardContainer*/}
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}> 
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

//sending get req to the server use angle brackets:<> to provide generic type argument
