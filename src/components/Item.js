import React from 'react';
// import Carousel from './Carousel';

function Item() {
    // const images = ['/logo512.png', '/logo512.png', '/logo512.png',];

    return (
        <div className="auction-item mb-4">
            <div className="media">
                <div className="actions">
                    <button className="elevations font-weight-bold">
                        $ 100
                    </button>

                    <button className="price elevation font-xs bid-now">
                        Bid Now
                    </button>
                </div>

                {/* <Carousel images={images} /> */}

                <div className="timer">
                    <span className="mr-2">02d</span>
                    <span>02h</span> :
                    <span>25m</span> :
                    <span>04s</span>
                </div>
            </div>

            <div className="description mt-1 p-2">
                <h5 className="text-white font-big">Blue and Pink Abstract</h5>
                <p className="text-muted">Add captions to your slides easily with the .carousel-caption element within any .carousel-item. They can be easily hidden on smaller...</p>

                <p className="text-secondary mb-1">Current Bid</p>
                <div className="current-bidder">
                    <img src="/logo192.png" alt="current bidder" className="mr-2"/>
                    <div className="details">
                        <p className="m-0 text-muted">John Doe</p>
                        <p className="m-0 font-big text-white">$120</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
