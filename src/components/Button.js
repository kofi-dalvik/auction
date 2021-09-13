import React from 'react';
import PropTypes from 'prop-types';

function Button({label, onClick, type, className, block}) {
    return (
        <button
            type={type}
            className={`btn ${block && 'btn-block'} font-small ${className}`}
            onClick={onClick}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    type:  PropTypes.string,
    className: PropTypes.string,
    block: PropTypes.bool
}

Button.defaultProps = {
    type: 'submit'
}

export default Button
