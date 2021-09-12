import React from 'react';
import Item from './Item';

function ItemList({ items }) {
    return (
        <>
            <div className="row">
                {items.map((item, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 v-stretch mb-4" key={index}>
                        <Item item={item}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemList
