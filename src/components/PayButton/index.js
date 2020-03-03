import React from "react";
import Btn from '../../components/Btn'


import { PAYMENT_BUTTONS } from '../../util/uiOptions'

const PayButton = (props) => {

    const location = new URL(window.location)
    const data = PAYMENT_BUTTONS[location.searchParams.get('paymentButton')]

    if (data && (data.visibility === 'always' || (
        data.visibility === 'formLoaded' && props.formLoaded
    )|| (
        data.visibility === 'accepted' && props.accepted
    ))) {
        return(
            <div className="tc" style={{padding: '20px'}}>
                {data.text &&  <p>
                    {data.text}
                </p>}
                <Btn>
                    {data.title}
                </Btn>
            </div>
        )
    }

    return null


}

export default PayButton