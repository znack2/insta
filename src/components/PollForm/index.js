import React, { Component, Fragment } from "react";

import Btn from '../../components/Btn'
import Input from '../../components/Input'
import { POLL_FORM_OPTIONS } from '../../util/uiOptions'

export default class PollForm extends Component{

    render() {

        const location = new URL(window.location)
        const option = location.searchParams.get('pollForm') || 1
        const data = POLL_FORM_OPTIONS[option]

        return (
            <div className={'tc'}>
                <form
                    style={{
                        textAlign: 'left',
                        maxWidth: '300px',
                        margin: '20px auto',
                    }}
                    onSubmit={(e) => {
                    e.preventDefault()
                    this.props.onConfirm()
                }}>
                    <label style={{
                        marginBottom: '10px'
                    }}>
                        {data.title}
                    </label>
                    {data.type === 'checkbox' &&
                        <Fragment>
                            {data.options.map((option, i) => {
                                return  (
                                    <div key={`${option}-${i}`} style={{
                                        marginBottom: '5px'
                                    }}>
                                        <label>
                                            <input type="checkbox" style={{
                                                marginRight: '10px'
                                            }}/>
                                            <span>{option}</span>
                                        </label>
                                    </div>
                                )
                            })}
                        </Fragment>
                    }
                    {data.type === 'select' && <div style={{
                        marginBottom: '15px'
                    }}>
                        <select>
                            {data.options.map((option) => {
                                return (
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                )
                            })}
                        </select>
                    </div>}

                    {data.type === 'text' && <div>
                        <Input type="text" />
                    </div>}
                    <div style={{
                        marginTop: '15px'
                    }}>
                        <Btn>
                            Анализировать
                        </Btn>
                    </div>
                </form>
            </div>
        );
    }
}