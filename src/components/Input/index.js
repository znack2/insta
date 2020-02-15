import React, { Fragment } from 'react'


import './input.css'

const Input = (type = 'text') => {
    return (
        <Fragment>
            <input type={type} className={'input'}/>
        </Fragment>
    )
}

export default Input