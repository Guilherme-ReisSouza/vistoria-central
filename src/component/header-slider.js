import React from 'react';
import Slider from 'react-slick';

// Componente Carrossel
const HeaderSlider = ({ slides = [] }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className='gradient-overlay' style={{ height: 'inherit' }}>
                    <div className='slider-item-container' style={{ backgroundImage: `url(${slide.bg})` }} >
                        <h1>{slide.title}</h1>
                        {slide.cta_url && slide.cta_url_class && slide.cta_text && (
                                <a className={slide.cta_url_class} href={slide.cta_url}>{slide.cta_text}</a>
                            )
                        }
                    </div>
                </div>
            ))}
        </Slider>
    );


};


export default HeaderSlider;
