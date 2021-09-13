import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
    const {
        className,
        label,
        value,
        name,
        placeholder,
        onChange
    } = props;

    return (
        <div className={`form-group elevation mb-4 ${className}`}>
            <label htmlFor={name} className="form-label">{{ name }}</label>
            <input
                value={value}
                onChange={onChange}
                id={name}
                name={name}
                type="text"
                className="form-control"
                placeholder={placeholder} />
        </div>
    )
}

Input.propTypes  = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default Input
