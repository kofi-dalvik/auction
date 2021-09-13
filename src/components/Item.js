import React from 'react';
import { Link } from 'react-router-dom';
import CurrentBidder from './CurrentBidder';
import Timer from './Timer';
import Carousel from './Carousel';
import PropTypes from 'prop-types';

function Item({ item, isDetailed}) {
    return (
        <div className={`auction-item elevation ${isDetailed && 'detailed'}`}>
            <div className="media">
                <div className="actions">
                    <button className="button elevations font-weight-bold">
                        $ { item.price }
                    </button>

                    {!isDetailed && (
                        <Link to={`items/${item.id}`} className="button elevation font-xs bid-now">
                            Bid Now
                        </Link>
                    )}

                </div>

                <Carousel images={item.images} />

                <Timer date={item.closing_date}/>
            </div>

            <div className="description mt-1 p-2">
                <h5 className={`text-white ${isDetailed ? 'font-big' : 'font-small text-truncate'}`}>{item.name}</h5>
                <p className={`mb-1 text-muted ${!isDetailed && 'text-truncate'}`}>{item.description}</p>

                <CurrentBidder title="Current Bid" bid={item.latest_bid} />
            </div>
        </div>
    )
}

Item.defaultProps = {
    isDetailed: false
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    isDetailed: PropTypes.bool
}

export default Item;
