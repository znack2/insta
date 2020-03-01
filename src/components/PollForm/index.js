import React, { Component, Fragment } from "react";

import Btn from '../../components/Btn'
import Input from '../../components/Input'
import { POLL_FORM_OPTIONS } from '../../util/uiOptions'
import style from './poll-form.module.css'

export default class PollForm extends Component{

    render() {

        const location = new URL(window.location)
        const option = location.searchParams.get('pollForm')
        const data = POLL_FORM_OPTIONS[option]

        if (!data) {
            return  null
        }

        return (
            <div className={'tc'}>
                <form className={style.form}
                    onSubmit={(e) => {
                    e.preventDefault()
                    this.props.onConfirm()
                }}>
                    <div className={`${style['form-wrap']} has-background-white`}>
                        <div className={style['form-header']}>
                            <h5 className='subtitle is-5'>
                                {data.title}
                            </h5>
                        </div>
                        <div className={`${style['form-content']} has-background-white-ter`}>
                            <div className="tc has-text-grey">
                                choose what you want
                            </div>
                            <br/>
                            <br/>
                            {data.type === 'checkbox' &&
                            <Fragment>
                                {data.options.map((option, i) => {
                                    return  (
                                        <div key={`${option}-${i}`} className={'field'}>
                                            <label className={'checkbox-row'}>
                                                <div className="checkbox-text text is-small has-text-grey-light	">
                                                    {option}
                                                </div>
                                                <div className={'checkbox switch'}>
                                                    <input type="checkbox"/>
                                                    <div className="slider round" />
                                                </div>
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
                                <Btn className={`${style['form-submit']}`}>
                                    Анализировать
                                </Btn>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}