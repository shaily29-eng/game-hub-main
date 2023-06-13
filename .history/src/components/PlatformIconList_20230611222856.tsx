import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"; //font-awesome
import { MdPhoneIphone } from "react-icons/md"; //material design
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"; //bootstrap
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = { //annotate iconMap- index signature
    //key- slug for each platform(all in small letters, slug is last part of URL:easy to read :its ID of object)
    pc: FaWindows, //icons are metioned at value for slugs (to be displayed)
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return ( //marginY as space between 
    <HStack marginY={1}> 
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" /> //https://chakra-ui.com/docs/styled-system/theme
      ))}
    </HStack>
  );
};

export default PlatformIconList;
