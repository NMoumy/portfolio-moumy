import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import UnTemoignage from './unTemoignage';
import temoignagesData from '../../../data/temoignages.json';

export default function TemoignagesCarousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={temoignagesData.length}
      isPlaying={true}
      interval={5000}
    >
      <Slider>
        {temoignagesData.map((temoignage, index) => (
          <Slide index={index} key={index}>
            <UnTemoignage temoignage={temoignage} />
          </Slide>
        ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}