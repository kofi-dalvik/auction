import {useContext, useState} from 'react'
import { saveMaxAutoBid } from '../adapters/items';
import { notifyError, notifySuccess } from '../helpers';
import {StateContext, DispatchContext} from '../store';
import { SET_AUTH_USER } from '../store/action-types';
import {Button} from '../components';

function BidConfig() {
    const {auth} = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    let amount = ''

    if (auth.user && auth.user.auto_bid_config) {
        amount = auth.user.auto_bid_config.max_bid_amount;
    }

    const [max_bid_amount, setMaxBidAmount] = useState(amount);

    const submit = (e) => {
        e.preventDefault();

        if (!parseFloat(max_bid_amount)) {
            return notifyError(`Please enter the maximum bid amount.`, 'Attention')
        }

        saveMaxAutoBid({max_bid_amount})
        .then(response  => {
            notifySuccess(response.message);

            if (response.user) {
                dispatch({
                    type: SET_AUTH_USER,
                    payload: {user: response.user}
                })
            }
        })
        .catch(error => {
            notifyError(error.message, `Saving failed!`)
        })
    }

    return (
        <div className="row">
            <div className="col-md-6 col-sm-8 col-12">
                <div className="bg-base-soft p-4 elevation rounded">
                    <div className="text-center mb-5 title">
                        <h4 className="font-big text-white">Auto Bidding Setup</h4>
                        <p className="m-0 text-muted">Let our bot bid on your behalf</p>
                    </div>

                    <form className="" onSubmit={submit}>
                        <div className="form-group elevation mb-4">
                            <label htmlFor="max_bid_amount" className="form-label">Maximum Bid Amount</label>
                            <input
                                value={max_bid_amount}
                                onChange={(e) => setMaxBidAmount(e.target.value)}
                                type="number"
                                className="form-control"
                                id="max_bid_amount"
                                placeholder=".e.g 10"
                            />
                        </div>

                        <Button className="btn-primary mt-5" label="SAVE CONFIGURATION" block/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BidConfig
