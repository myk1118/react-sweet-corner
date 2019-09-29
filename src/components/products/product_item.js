import React from 'react';
import Money from '../general/money'

const ProductItem = (props) => {
    // console.log("Props: ", props);
    const { name, thumbnail, caption, cost, goToDetails } = props
    return (
        <div className="product-item col-4" onClick={goToDetails}>
            <div className="name">{name}</div>
            <img className="thumbnail" src={thumbnail.url} />
            <div className="caption">{caption}</div>
            <div className="cost">
                <Money money={cost} />
            </div>
        </div>
    )
}

export default ProductItem;
