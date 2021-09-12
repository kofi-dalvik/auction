import React from 'react'

const carouselId = `carousel-${Math.random().toString(16).split('.').pop()}`;

function Carousel({images}) {
    return (
        <div id={carouselId} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {  images.map((url, index) =>  (
                    <div className="carousel-item" key={index}>
                        <img className="d-block w-100" src={url} alt={`Slide ${index}`} />
                    </div>
                )) }
            </div>

            <a className="carousel-control-prev" href={`#${carouselId}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href={`#${carouselId}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel
