import React, { Component } from 'react';
import { Field } from 'redux-form';
import CustomInput from './CustomInput';

class TextArea extends Component {
    render() {
        return (
            <div className="input-field">
                <Field
                    name="message"
                    placeholder="Message"
                    component={CustomInput}
                />
            </div>
        );
    }
}

export default TextArea;
