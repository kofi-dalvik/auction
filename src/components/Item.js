import React from 'react';
import { Link } from 'react-router-dom';
import CurrentBidder from './CurrentBidder';
import Timer from './Timer';
import Carousel from './Carousel';

function Item({item}) {
    // const images = ['/logo512.png', '/logo512.png', '/logo512.png',];

    return (
        <div className="auction-item elevation v-stretch">
            <div className="media">
                <div className="actions">
                    <button className="button elevations font-weight-bold">
                        $ { item.price }
                    </button>

                    <Link to={`items/${item.id}`} className="button elevation font-xs bid-now">
                        Bid Now
                    </Link>
                </div>

                <Carousel images={item.images} />

                <Timer date={item.closing_date}/>
            </div>

            <div className="description mt-1 p-2">
                <h5 className="text-white font-small text-truncate">{item.name}</h5>
                <p className="mb-1 text-muted text-truncate">{item.description}</p>

                <CurrentBidder bid={item.latest_bid} />
            </div>
        </div>
    )
}

export default Item;
