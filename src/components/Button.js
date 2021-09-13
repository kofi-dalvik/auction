import React from 'react';
import PropTypes from 'prop-types';

function Button({label, onClick, type, className, block, icon, raw}) {
    return (
        <button
            type={type}
            className={`${!raw && 'btn' } ${block && 'btn-block'} font-small ${className}`}
            onClick={onClick}>
            {icon} {label}
        </button>
    )
}

Button.propTypes = {
    icon: PropTypes.any,
    label: PropTypes.any,
    onClick: PropTypes.func,
    type:  PropTypes.string,
    className: PropTypes.string,
    block: PropTypes.bool
}

Button.defaultProps = {
    type: 'submit'
}

export default Button
