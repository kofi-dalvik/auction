import {useState} from 'react'
import { toggleAutoBid as toggler } from '../adapters/items';
import { notifySuccess } from '../helpers';

function ToggleAutoBid({item}) {
    const { auto_bid_activations } = item;
    const active = Array.isArray(auto_bid_activations) && !!auto_bid_activations.length;
    const [auto_bidding, setAutoBidding] = useState(active);

    const submit = (e) => {
        let value = e.target.checked;

        setAutoBidding(value);

        toggler({
            item_id: item.id,
            auto_bidding: Number(value)
        }).then(response => {
            notifySuccess(`Auto biding ${value ? 'activated' : 'deactivated'} for ${item.name}`);
        })
        .catch(error => null);
    }

    return (
        <form className="bg-base-soft p-3 pl-4 pr-4 rounded elevation mb-4">
            <p className="font-small  text-muted">When auto-bid is turned on, the system will automatically bid on your behalf until you're out of funds</p>
            {auto_bidding ? <p className="text-success">You've setup auto-bidding for this item</p> : null}
            <label className="text-white cursor-pointer">
                <input defaultChecked={auto_bidding} onChange={submit} type="checkbox" className="mr-2" />
                <span>Turn On Auto Bidding</span>
            </label>
        </form>
    )
}

export default ToggleAutoBid
