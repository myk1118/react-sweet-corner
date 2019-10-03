import React, { Component } from 'react';
import './cart.scss';
import { connect } from 'react-redux';
import { getActiveCart } from '../../actions';
import Money from '../general/money';
import { Link } from 'react-router-dom';

class Cart extends Component {
    componentDidMount() {
        this.props.getActiveCart();
    }
    render() {
        console.log('Cart Items: ', this.props.cartItems);
        const { cartItems } = this.props;
        // if (cartItems == null) return false;
        return (
            <div>
                {cartItems && cartItems.map(v => (
                    <div key={v.itemId}>
                        <img src={v.thumbnail.url} alt="cartItem" className="cartItem" />
                        <div>{v.name}</div>
                        <div><Money money={v.each} /></div>
                        <div>{v.quantity}</div>
                        <div><Money money={v.total} /></div>
                    </div>
                ))}
                <Link to="/checkout/guest" className="guestCheckoutLink">Checkout as Guest</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log("Cart State: ", state);
    return {
        cartItems: state.cart.items
    }
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart
})(Cart);