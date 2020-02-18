import React from 'react';

const Btn = ({children, onClick, disabled, className = 'button is-info'}) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Btn