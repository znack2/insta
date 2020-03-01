import React from 'react'
import style from './main-logo.module.css'

import arrow from '../../assets/img/arrow.svg'

const MainLogo = ({color = '#fff'}) => {
    return (
        <div className={style.wrap}>
            <h3 className={`main-logo title is-3 ${style.wrap}`}
                style={{color}}>
                what
                <br/>
                happens next
            </h3>
            <img src={arrow} className={style.img}/>
        </div>

    )
}

export default MainLogo