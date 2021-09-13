import React from 'react'
import PropTypes from 'prop-types';
import CurrentBidder from './CurrentBidder';

function BiddingHistory({ item }) {
    const { biddings } = item;

    return (
        <div className="bg-base-soft p-3 pl-4 pr-4 rounded elevation pb-5">
            <h2 className="text-white mb-4 font-small">Bidding History</h2>

            {biddings.map((bid, index) => <CurrentBidder bid={bid} key={index}/>)}

            {!biddings.length && <p className="text-center text-muted">No bid found</p>}
        </div>
    )
}

BiddingHistory.propTypes = {
    biddings: PropTypes.array
}

export default BiddingHistory
