import React, { useState, useEffect } from 'react';
import styleCSS from './ImageSlider.module.css';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';

const ImageSlider = (props) => {

  const [currentImage, setCurrentImage] = useState(0);
  let image = image1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % props.data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  switch (currentImage) {
    case 0:
      image = image1;
      break;
    case 1:
      image = image2;
      break;
    case 2:
      image = image3;
      break;
  }

  return (
    <section className={styleCSS.gridServiceItem}>
    <div className={styleCSS.serviceItem}>
      {/*<img className={styleCSS.imgItem} src={props.data[currentImage].imgSrc} alt={`Image ${currentImage}`} />*/}
      <img className={styleCSS.imgItem} src={image} alt={`Image ${currentImage}`} />
      {<div className={styleCSS.desriptionItem}>
        <div className={styleCSS.desriptionContents}>
          <h2>
            {props.data[currentImage].description}
            <button className={styleCSS.button} onClick={() => scrollToSection('contact')}>CONTACT US</button>
          </h2>
        </div>
      </div> }
    </div>
    </section>
  );
};

export default ImageSlider;