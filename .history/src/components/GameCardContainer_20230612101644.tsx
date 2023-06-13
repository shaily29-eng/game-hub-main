import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // It is a union type that includes all possible types that can be rendered as children in React.
}

const GameCardContainer = ({ children }: Props) => {
  return ( //Box is primitive component in chakra
    <Box borderRadius={10} overflow="hidden"> 
      {children}
    </Box>
  );
};

export default GameCardContainer;
