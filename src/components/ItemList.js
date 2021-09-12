import React from 'react';
import Item from './Item';
import Pagination from './Pagination';

function ItemList({ items }) {
    return (
        <>
            <div className="row">
                {items.map((item, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                        <Item item={item}/>
                    </div>
                ))}
            </div>

            <Pagination />
        </>
    )
}

export default ItemList
