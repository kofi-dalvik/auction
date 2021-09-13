import React from 'react'

function CurrentBidder({ bid, title}) {
    const created_at = new Date(bid.created_at).toLocaleDateString()
    const [time,] = new Date(bid.created_at).toTimeString().split(' ')

    return (
        <>
            {title && <p className="text-secondary mb-1">{title}</p> }

            <div className="current-bidder mb-1">
                {bid ? (<>
                    <img src={bid.user.image_url} alt="current bidder" className="mr-2" />
                    <div className="details flex-grow-1">
                        <p className="m-0 text-muted">{bid.user.username}</p>
                        <p className="m-0 font-xxs text-white">{created_at} {time}</p>
                    </div>
                    <div className="text-secondary font-weight-bold">
                        ${ bid.amount }
                    </div>
                </>) : <p className="text-center m-0 text-muted flex-grow-1">No bid made</p>}
            </div>
        </>
    )
}

export default CurrentBidder
