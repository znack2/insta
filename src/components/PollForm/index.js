import React, { Component, Fragment } from "react";

import Btn from '../../components/Btn'
import Input from '../../components/Input'
import { POLL_FORM_OPTIONS } from '../../util/uiOptions'

export default class PollForm extends Component{

    render() {

        const location = new URL(window.location)
        const option = location.searchParams.get('pollForm') || 1
        const data = POLL_FORM_OPTIONS[option]

        if (!data) {
            return  null
        }

        return (
            <div className={'tc'}>
                <form
                    style={{
                        textAlign: 'left',
                        maxWidth: '500px',
                        margin: '20px auto',
                    }}
                    onSubmit={(e) => {
                    e.preventDefault()
                    this.props.onConfirm()
                }}>
                    <h5 className='subtitle is-5'>
                        {data.title}
                    </h5>
                    {data.type === 'checkbox' &&
                        <Fragment>
                            {data.options.map((option, i) => {
                                return  (
                                    <div key={`${option}-${i}`} className={'field'}>
                                        <label className={'checkbox'}>
                                            <input type="checkbox"/> {' '}
                                            <span>{option}</span>
                                        </label>
                                    </div>
                                )
                            })}
                        </Fragment>
                    }
                    {data.type === 'select' && <div className={'field'}>
                        <div className="select">
                            <select>
                                {data.options.map((option) => {
                                    return (
                                        <option value={option} key={option}>
                                            {option}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>}

                    {data.type === 'text' && <div className={'field'}>
                        <Input type="text" />
                    </div>}
                    <div className={'field'}>
                        <Btn>
                            Анализировать
                        </Btn>
                    </div>
                </form>
            </div>
        );
    }
}