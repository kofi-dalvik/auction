import React from 'react';
import Item from './Item';
import Pagination from './Pagination';

function ItemList({ items }) {
    return (
        <>
            <div className="row">
                {items.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <Item />
                    </div>
                ))}
            </div>

            <Pagination />
        </>
    )
}

export default ItemList
