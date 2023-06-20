import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from './images/slider_1.jpg'
import sliderImg2 from './images/slider_2.jpg'
import sliderImg3 from './images/slider_3.jpg'
import './SCSS/Carousel.scss';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 btn-img-slide"
          src={sliderImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carousels-title'> Spring/ Summer Colecction 2017 </h3>
          <h1 className='carousels-title-sale'> Get up to 30% Off </h1>
          <h1 className='carousels-title-sale2'> New Arrivals </h1>
          <button type="button" class="btn btn-danger shopnow"> Shop Now </button>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 btn-img-slide"
          src={sliderImg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='carousels-title'> Spring/ Summer Colecction 2017 </h3>
          <h1 className='carousels-title-sale'> Get up to 30% Off </h1>
          <h1 className='carousels-title-sale2'> New Arrivals </h1>
          <button type="button" class="btn btn-danger shopnow"> Shop Now </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 btn-img-slide"
          src={sliderImg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='carousels-title'> Spring/ Summer Colecction 2017 </h3>
          <h1 className='carousels-title-sale'> Get up to 30% Off </h1>
          <h1 className='carousels-title-sale2'> New Arrivals </h1>
          <button type="button" class="btn btn-danger shopnow"> Shop Now </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;