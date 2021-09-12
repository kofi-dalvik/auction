import AuthLayout from './AuthLayout';
import Item from '../components/Item';

function ItemDetail() {
    return (
        <AuthLayout className="pt-3">
            <div className="row">
                <div className="col-md-6">
                    <Item />
                </div>
                <div className="col-md-3">
                    <Item />
                </div>
                <div className="col-md-3">
                    <Item />
                </div>
            </div>
        </AuthLayout>
    )
}

export default ItemDetail;
