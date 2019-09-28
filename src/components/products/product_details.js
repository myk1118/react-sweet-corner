import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductDetails } from '../../actions'
import Money from '../general/money';

class ProductDetails extends Component {
    componentDidMount() {
        // console.log("Product Details Component Mounted");
        // console.log("Product ID: ", this.props.match.params.product_id);
        const { getProductDetails, match: { params: { product_id } } } = this.props;
        // console.log("Product ID: ", product_id);
        getProductDetails(product_id);
    }
    render() {
        const { details } = this.props;
        if (!details) {
            return <div>Loading...</div>
        }
        console.log("Product Details: ", details);
        return (
            <div className="product-details">
                <img src={details.image.url} />
                <h1>{details.name}</h1>
                <div>{details.caption}</div>
                <div>{details.description}</div>
                <div><Money money={details.cost} /></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("Product Details State: ", state)
    return {
        details: state.products.details
    }
}

// Using connect to connect getProductDetails to Redux and the <ProductDetails> component
export default connect(mapStateToProps, {
    getProductDetails: getProductDetails
})(ProductDetails);
