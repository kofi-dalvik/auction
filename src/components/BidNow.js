import {useState} from 'react';
import { notifyError, notifySuccess } from './../helpers';
import { makeBid } from '../adapters/items';

function BidNow({item}) {
    const { latest_bid } = item;
    const minBidAmount = latest_bid ? latest_bid.amount : item.price;

    const [amount, setAmount] = useState(minBidAmount + 1);

    const processBidding = () => {
        makeBid({amount, item_id: item.id})
        .then(response => {
            notifySuccess(`Your $${amount} bid has been submited`);
        })
        .catch(error => {
            if (error.message) {
                notifyError(error.message, `Oops`, `Cool`);
            }
        })
    }

    const submit = (e) => {
        e.preventDefault();

        let error = null;

        if (!parseFloat(amount)) {
            error = `A valid amount is required`;
        } else if (amount <= minBidAmount) {
            error = `You can only bid more than $ ${minBidAmount}`
        }

        if (error) {
            return notifyError(error, 'Incorrect data');
        }

        processBidding();
    }

    return (
        <form className="bg-base-soft p-3 pl-4 pr-4 pb-5 rounded elevation" onSubmit={submit}>
            <h2 className="text-white mb-4 font-small">Place your bid</h2>
            <div className="form-group elevation mb-4">
                <label htmlFor="amount" className="form-label">Bid Amount</label>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder=".e.g 10"
                />
            </div>

            {/* {autoBidActivated ? <p className="text-success">You've setup auto-bidding for this item</p> : <label className="text-white cursor-pointer">
                <input value={auto_bidding} onChange={(e) => setAutoBidding(e.target.checked)} type="checkbox" className="mr-2"/>
                <span>Turn On Auto Bidding</span>
            </label>} */}

            <button type="submit" className="btn btn-primary btn-block mt-4 font-small">SUBMIT BID</button>
        </form>
    )
}

export default BidNow
