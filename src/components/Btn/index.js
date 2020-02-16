import React from 'react';

import './btn.css'

const Btn = ({children, onClick, disabled}) => {
    return (
        <button className={'btn'} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Btn