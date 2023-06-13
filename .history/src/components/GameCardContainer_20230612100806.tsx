import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return ( //auBauox is primitive component in chakraaudio
    <Box borderRadius={10} overflow="hidden"> 
      {children}
    </Box>
  );
};

export default GameCardContainer;
