import React from 'react';

import './btn.css'

const Btn = ({children, onClick}) => {
    return (
        <button className={'btn'} onClick={onClick}>
            {children}
        </button>
    )
}

export default Btn