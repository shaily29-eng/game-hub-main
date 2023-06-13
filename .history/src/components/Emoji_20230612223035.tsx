import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number; //can be float
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = { //keys:rating of game
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  }

  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji

//index signature: emojiMap is annotated with any no. of keys assigned to ImageProps object (defined in chakra UI)
//ImageProps type defines the p