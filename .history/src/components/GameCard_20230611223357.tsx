import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} /> {/*from docs*/}
      <CardBody> 
        <HStack justifyContent="space-between" marginBottom={3}>  {/*space }
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)} //mapping card with platform
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl"> {/*https://chakra-ui.com/docs/components/text/usage#changing-the-font-size*/}
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

//overflow:"hidden":css property:to make rounded borders 