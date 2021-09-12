import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import Item from '../components/Item';
import { show } from '../adapters/items';
import BidNow from '../components/BidNow';

function ItemDetail() {
    const {item_id} = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        show(item_id)
        .then(response => {
            console.log(response);
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
                    <div className="col-md-6">
                        <Item item={item} isDetailed />
                    </div>
                    <div className="col-md-6">
                        <BidNow item={item}/>
                    </div>
                </div>
           </> }
        </AuthLayout>
    )
}

export default ItemDetail;
