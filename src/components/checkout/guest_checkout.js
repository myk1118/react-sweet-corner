import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../general/form/CustomInput';
import './checkout.scss';

class Guest extends Component {
    handleGuestCheckout(formValues) {
        console.log("Guest Checkout Form Values: ", formValues);
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

export default reduxForm({
    form: 'guest-checkout-form'
})(Guest);