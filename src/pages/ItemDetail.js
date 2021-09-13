import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import Item from '../components/Item';
import { show } from '../adapters/items';
import BidNow from '../components/BidNow';
import BiddingHistory from '../components/BiddingHistory';
import ToggleAutoBid from '../components/ToggleAutoBid';

function ItemDetail() {
    const {item_id} = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        show(item_id)
        .then(response => {
            // console.log(response);
            setItem(response);
        })
        .catch(error => {
            console.log(error);
        })
    }, [item_id])

    return (

        <AuthLayout className="pt-3">
           { item && <>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <Item item={item} isDetailed />
                    </div>
                    <div className="col-md-3 col-sm-6 v-stretch mb-3">
                        <ToggleAutoBid item={item}/>

                        <BidNow item={item}/>
                    </div>
                    <div className="col-md-3 col-sm-6 v-stretch mb-3">
                        <BiddingHistory item={item} />
                    </div>
                </div>
           </> }
        </AuthLayout>
    )
}

export default ItemDetail;
