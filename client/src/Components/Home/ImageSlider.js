import React,{useState} from 'react';
import {SliderData} from './SliderData';
import '../../Assets/Global-Styles/bootstrap.min.module.css';
// import {FaArrowAltCircleRight} from "react-icons/fa";
import style from './ImageSlider.module.css';
import {BsChevronDoubleLeft,BsChevronDoubleRight} from "react-icons/bs";

const ImageSlider = ({slides}) => {
  
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className = {style.is}>
        <section className={style.slider}>
      <BsChevronDoubleLeft className={style.leftarrow} onClick={prevSlide} />
      <BsChevronDoubleRight className={style.rightarrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={style.index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className={style.image} />
            )}
          </div>
        );
      })}
    </section>
    </div>
    );
}

export default ImageSlider