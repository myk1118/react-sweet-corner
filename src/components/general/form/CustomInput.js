import React from 'react';

export default props => {
    const { label, input, type = 'text', autoComplete = 'off', placeholder, meta } = props;

    const hasError = meta.touched && meta.error;

    return (
        <div className="input-field">
            <label>{label}</label>
            <input {...input} className={hasError ? 'with-error' : ''} type={type} autoComplete={autoComplete} placeholder={placeholder} />
            <div className="danger error">{hasError}</div>
        </div>
    );
}
