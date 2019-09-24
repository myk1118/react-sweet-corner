import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../general/form/CustomInput';
import TextArea from '../general/form/textarea';
import '../general/form/form.scss';

class ErrorHandlingForm extends Component {
    handleFormSubmit(formValues) {
        console.log('On Submit Simple Form Values:', formValues);
        this.resetForm();
    }

    resetForm() {
        this.props.reset();
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="contactForm col-5">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <div>Contact Form</div>
                    <div className="input-field">
                        {/* <label>Name</label> */}
                        <Field
                            name="name"
                            placeholder="Name"
                            component={CustomInput}
                        />
                    </div>
                    <div className="input-field">
                        {/* <label>Email</label> */}
                        <Field
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            component={CustomInput}
                        />
                    </div>
                    <div className="input-field">
                        {/* <label>Phone</label> */}
                        <Field
                            name="phone"
                            placeholder="Phone"
                            type="number"
                            component={CustomInput}
                        />
                    </div>
                    <div className="input-field">
                        {/* <label>Subject</label> */}
                        <Field
                            name="subject"
                            placeholder="Subject"
                            component={CustomInput}
                        />
                    </div>
                    <TextArea />
                    <div className="form-actions">
                        <button onClick={this.resetForm.bind(this)} type="button">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(formValues) {
    const { name, email, phone, subject, message } = formValues;
    const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const nameRegEx = /^(.*\s+.*)+$/;
    const errors = {};

    if (!name) {
        errors.name = 'Please enter your name';
    } else if (name.length < 2) {
        errors.name = 'Name must be at least 2 characters long';
    } else if (!nameRegEx.test(name)) {
        errors.name = 'Please enter First Name and Last Name';
    }

    if (!email) {
        errors.email = 'Please enter your email';
    } else if (!emailRegEx.test(email)) {
        errors.email = 'Please enter a valid email address. Example: me@example.com';
    }

    if (!phone) {
        errors.phone = 'Please enter your phone number';
    } else if (phone.length !== 10) {
        errors.phone = 'Phone number must be 10 digits long';
    }

    if (!subject) {
        errors.subject = 'Please enter a subject';
    } else if (subject.length < 2) {
        errors.subject = 'Subject must be at least 2 characters long';
    }

    if (!message) {
        errors.message = 'Please enter a message';
    } else if (message.length > 100) {
        errors.message = 'Message cannot be over 1000 characters long'
    }

    return errors;
}

export default reduxForm({
    form: 'error-handling-form',
    validate: validate
})(ErrorHandlingForm);
