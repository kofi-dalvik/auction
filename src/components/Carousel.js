import React from 'react'

function Carousel({images}) {
    const slides = images.map((slide, index) => (
        <div
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            key={index}>
            <img src={slide.image_url} className="d-block w-100" alt="..." />
        </div>
    ));

    return (
        <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {slides}
            </div>
        </div>
    )
}

export default Carousel
