import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGuestOrder } from '../../actions';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../general/form/CustomInput';
import './checkout.scss';

class GuestCheckout extends Component {
    handleGuestCheckout = async (formValues) => {
        // console.log("Guest Checkout Form Values: ", formValues);
        const orderInfo = await this.props.createGuestOrder(formValues);
        console.log("Order Info: ", orderInfo);
        const redirectUrl = `/orders/guest/${orderInfo.orderId}?email=${orderInfo.email}`;
        this.props.history.push(redirectUrl);
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="guest-checkout">
                <form onSubmit={handleSubmit(this.handleGuestCheckout)}>
                    <h1 className="center">Guest Checkout</h1>
                    <Field
                        name="firstName"
                        placeholder="First Name"
                        component={CustomInput}
                    />
                    <Field
                        name="lastName"
                        placeholder="Last Name"
                        component={CustomInput}
                    />
                    <Field
                        name="email"
                        placeholder="Email"
                        component={CustomInput}
                    />
                    <button>Submit Order</button>
                </form>
            </div>
        )
    }
}

GuestCheckout = reduxForm({
    form: "checkout-form",
})(GuestCheckout);

export default connect(null, {
    createGuestOrder: createGuestOrder
})(GuestCheckout);