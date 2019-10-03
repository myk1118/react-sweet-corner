import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductDetails, clearProductDetails, addItemToCart } from '../../actions'
import Money from '../general/money';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }
    componentDidMount() {
        // console.log("Product Details Component Mounted");
        // console.log("Product ID: ", this.props.match.params.product_id);
        const { getProductDetails, match: { params: { product_id } } } = this.props;
        // console.log("Product ID: ", product_id);
        getProductDetails(product_id);
    }
    componentWillUnmount() {
        console.log("ProductDetails component about to unmount");
        this.props.clearProductDetails();
    }
    incrementQuantity = () => {
        const { quantity } = this.state;
        this.setState({
            quantity: quantity + 1
        })
    }
    decrementQuantity = () => {
        const { quantity } = this.state;
        if (quantity === 1) return;
        this.setState({
            quantity: quantity - 1
        });
    }
    handleAddToCart = async () => {
        const { quantity } = this.state;
        const { id } = this.props.details;
        // console.log(`Add ${quantity} items to cart, with product ID: ${id}`);
        await this.props.addItemToCart(id, quantity);
        this.props.history.push('/cart');
    }
    render() {
        // console.log("this.props: ", this.props);
        const { details } = this.props;
        if (!details) {
            return <div>Loading...</div>
        }
        // console.log("Product Details: ", details);
        return (
            <div className="product-details">
                <img src={details.image.url} />
                <h1>{details.name}</h1>
                <div>{details.caption}</div>
                <div>{details.description}</div>
                <div><Money money={details.cost} /></div>
                <div className="product-quantity right mb-3">
                    <h2 className="left">Quantity</h2>
                    <div className="quantity-controls">
                        <button className="btn btn-quantity" onClick={this.decrementQuantity}>-</button>
                        <span className="quantity">{this.state.quantity}</span>
                        <button className="btn btn-quantity" onClick={this.incrementQuantity}>+</button>
                    </div>
                    <button className="btn" onClick={this.handleAddToCart}>Add To Cart</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("Product Details State: ", state)
    return {
        details: state.products.details
    }
}

// Using connect to connect getProductDetails to Redux and the <ProductDetails> component
export default connect(mapStateToProps, {
    getProductDetails: getProductDetails,
    clearProductDetails: clearProductDetails,
    addItemToCart: addItemToCart
})(ProductDetails);
