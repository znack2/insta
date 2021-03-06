import React from 'react'

import Btn from '../../components/Btn'

import pollStyle from '../PollForm/poll-form.module.css'


import { RECOMMEND_RESULT_MESSAGE_OPTIONS } from '../../util/uiOptions'

const ResultMessage = ({onRefresh}) => {

    const location = new URL(window.location)
    const option = location.searchParams.get('resultMessage') || 1
    const currentOption = RECOMMEND_RESULT_MESSAGE_OPTIONS[option]

    let content = currentOption.text

    if (currentOption.button) {
        content = (
            <Btn onClick={onRefresh} className={pollStyle['form-submit']}>
                {currentOption.text}
            </Btn>
        )

        if (window.width < 767) {
            content = (
                <Btn onClick={onRefresh} className={'success-refresh'}>
                    {currentOption.text}
                </Btn>
            )
        }
    }

    if (currentOption.action === 'show_later') {

        const d = new Date(); d.setMinutes(d.getMinutes() + 10);

        content = (
            <p>
                {currentOption.text} {d.toLocaleString('ru', {hour: '2-digit', minute: '2-digit'})}
            </p>
        )
    }


    return (
        <div style={{marginTop: '20px'}}>
            {content}
        </div>
    )

}

export default ResultMessage