import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGuestOrderDetails } from '../../actions';
import { queryToObject } from '../../helpers';
import Money from '../general/money';

class GuestOrderDetails extends Component {
    componentDidMount() {
        // console.log("Geust Order Details: ", this.props);
        const orderId = this.props.match.params.order_id;
        // console.log("Guest Order Details Order ID: ", orderId);
        const { match, location } = this.props;
        const query = queryToObject(location.search);
        // console.log('Query Object:', query);
        const email = query.email;
        // console.log("Email: ", email);
        this.props.getGuestOrderDetails(orderId, email);
    }
    render() {
        console.log(this.props.orders);
        if (this.props.orders == null) return false;
        const { createdAt, itemCount, items, status, total } = this.props.orders;
        return (
            <div>
                <h1 className="center">Guest Order Details</h1>
                <div>Status: {status}</div>
                <div>Order Placed: {new Date(createdAt).toLocaleString()}</div>
                <div>Order Total Items: {itemCount}</div>
                <div>Order Total Cost: <Money money={total} /></div>
                <div>Order Items: {items.map(v => (
                    <div key={v.id}>
                        <img src={v.product.thumbnail.url} alt="ItemDetailsPicture" />
                        <div>Product {v.product.name}</div>
                        <div>Each <Money money={v.each} /></div>
                        <div>Quantity {v.quantity}</div>
                        <div>Total <Money money={v.total} /></div>
                    </div>
                ))}</div>
                <div>Order Totals: {itemCount} <Money money={total} /></div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    // console.log(state.orders.details);
    return {
        orders: state.orders.details
    }
}

export default connect(mapStatetoProps, {
    getGuestOrderDetails: getGuestOrderDetails
})(GuestOrderDetails);