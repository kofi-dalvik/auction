import React from 'react'

function CurrentBidder({bid}) {
    return (
        <>
            <p className="text-secondary mb-1">Current Bid</p>
            <div className="current-bidder">
                {bid ? (<>
                    <img src={bid.user.image_url} alt="current bidder" className="mr-2" />
                    <div className="details">
                        <p className="m-0 text-muted">{bid.user.username}</p>
                        <p className="m-0 font-big text-white">$ {bid.amount}</p>
                    </div>
                </>) : <p className="text-center m-0 text-muted flex-grow-1">No bid made</p>}
            </div>
        </>
    )
}

export default CurrentBidder
