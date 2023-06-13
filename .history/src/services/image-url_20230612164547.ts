import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage; //if url not exists
  
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;


//the rawg.io API supports cropping imgs on the fly.  Just add crop/600/400 in b/w the url after /media:this crops the gameCard
//assets folder has static asset that we are going to deploy in our app: we should import img as module not like 