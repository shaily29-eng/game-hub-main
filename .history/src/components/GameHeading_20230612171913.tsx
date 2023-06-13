import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery //to make heading dynamic ()
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading