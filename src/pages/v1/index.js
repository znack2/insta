import React, {Fragment, useState} from 'react';

import Btn from '../../components/Btn'

import Preloader from '../../components/Preloader'
import PollForm from '../../components/PollForm'
import SuccessPage from '../../components/SuccessPage'
import PayButton from "../../components/PayButton";
import LoadersList from "../../components/LoadersList";
import MainLogo from "../../components/MainLogo";

import MainTitle from "../../components/MainTitle";

import pollStyle from '../../components/PollForm/poll-form.module.css'

import { ReactComponent as Inst } from "../../assets/img/inst-icon.svg";

const Header = () => {

    const location = new URL(window.location)


    return (
        <div style={{
            maxWidth: '500px',
            fontSize: '1.56rem',
            margin: '0 auto',
            padding: '20px',
            lineHeight: '1.21'
        }}>
            <div className="tc">
                <MainLogo />
            </div>
            <br/>
            <h1 className={'title is-1 has-text-white'}>
                Analyze your profile
            </h1>
            <p className={'is-medium has-text-white'}>
                <MainTitle option={location.searchParams.get('mainTitle')} />
            </p>
        </div>
    )
}

const FirstProto = () => {

    const location = new URL(window.location)


    const [accepted, setAccept] = useState(false)
    const [pollVisible , setPollVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formLoaded, setFormLoaded] = useState(false)
    const [buttonOption, setButtonOption] = useState(parseInt(location.searchParams.get('buttonOptions'), 10))
    const [paymentButton, setPaymentButton] = useState(parseInt(location.searchParams.get('paymentButton'), 10))
    const [pollForm, setPollForm] = useState(parseInt(location.searchParams.get('pollForm'), 10))


    if (loading) {
        return (
            <Fragment>
                <Header />
                <div className={'tc'} style={{'maxWidth': '400px', 'margin': '20px auto'}}>
                    <Preloader />
                    <br/>
                    <p className={'is-medium has-text-white'}>
                        Собираю данные
                    </p>
                </div>
            </Fragment>

        )
    }

    if (pollVisible) {
        return (
            <Fragment>
                <Header />
                <PollForm onConfirm={() => {
                    setPollVisible(false)
                    setAccept(true)
                }}/>
            </Fragment>

        )
    }

    if (accepted) {

        let resultMarkup = null

        if (buttonOption === 4) {

            resultMarkup = (
                <LoadersList onComplete={() => {
                    setAccept(true)
                    setLoading(false)
                    setButtonOption(null)
                }}/>
            )

        } else if (buttonOption === 5) {

            resultMarkup = (
             <Fragment>
                 <div className={'tile notification is-success'} style={{
                     maxWidth: '500px',
                     margin: '0 auto 20px auto'
                 }}>
                     проанализирован профиль, найдено 10 подходящих рекомендации,
                 </div>
                 <Btn onComplete={() => {
                     setAccept(true)
                     setLoading(false)
                     setButtonOption(null)


                 }}>
                     перейти?
                 </Btn>
             </Fragment>
            )
        } else if (formLoaded && !location.searchParams.get('subscribe')) {
            resultMarkup = (
                <Fragment>
                    <SuccessPage
                    onResultMessageRefresh={() => {
                        setLoading(true)

                        setTimeout(() => {

                            setAccept(true)
                            setLoading(false)
                        }, 2000)
                    }}
                    />
                </Fragment>
            )
        }

        return (
            <div style={{'width': '100%', 'margin': '20px auto'}}>
                {resultMarkup}

                {formLoaded && location.searchParams.get('subscribe') &&
                    <div style={{marginTop: `30px`}}>
                        <div className={`${pollStyle['form-wrap']} has-background-white`}>
                            <div className={`${pollStyle['form-header']} tc`} style={{
                                marginBottom: '-40px'
                            }}>
                               <MainLogo color={`#001229`}/>
                            </div>
                            <div className={`${pollStyle['form-content']} has-background-white-ter`}>
                                <div className="tc has-text-grey">
                                   apply for early users
                                </div>
                                <br/>
                                <br/>
                                <div id="mc_embed_signup">
                                    <form
                                        action="https://stayandsmile.us4.list-manage.com/subscribe/post?u=24e39dfc101fdfd353eefbd32&amp;id=37fbf0a0ba"
                                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                        className="validate" target="_blank">
                                        <div id="mc_embed_signup_scroll" style={{
                                            maxWidth: '300px',
                                            margin: '0 auto'
                                        }}>
                                            <div className="field">
                                                <label htmlFor="mce-EMAIL">Subscribe</label>
                                                <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL"
                                                       placeholder="email address" required />
                                            </div>
                                            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input
                                                type="text" name="b_24e39dfc101fdfd353eefbd32_37fbf0a0ba" tabIndex="-1"/></div>
                                            <div className="field">

                                                <input type="submit" value="Subscribe" name="subscribe"
                                                       id="mc-embedded-subscribe" className={`${pollStyle['form-submit']}`} />

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <PayButton formLoaded={formLoaded} accepted={accepted}/>
            </div>
        )
    }


    return (
        <div>
            <Header />
            <div style={{
                maxWidth: '500px',
                padding: '0 20px',
                margin: '0 auto',
            }} className={'tc'}>
               <span className="is-medium has-text-white">
                    Sign up with
                </span>

            </div>
            {paymentButton !== 1 &&

            <div style={{
                maxWidth: '500px',
                padding: '20px',
                margin: '0 auto',
            }}>
                <Btn className={'button is-white tc auth-btn'} onClick={() => {

                    const w = 500
                    const h = 500

                    const left = (window.width/2)-(w/2);
                    const top = (window.height/2)-(h/2);

                    const newWin = window.open('about:blank', "auth", `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`);

                    newWin.document.write(
                        `<div style="padding: 20px;font-family: 'Open Sans', sans-serif">
                        <div>
                        <img alt="Instagram" style="max-width: 300px;"
                            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png">
                        </div>    
                        <p>
                            Приложение запрашивает следующие разрешения:
                        </p>
                        
                        <p>
                        <strong>
                            Доступ к информации в вашем профиле
                        </strong>
                       
                        имя пользователя, тип аккаунта
                        </p>
                        <p>
                        <strong>
                            Доступ к вашим медиафайлам
                        </strong>
                            подписи, количество и тип медиафайлов, URL для доступа, постоянная ссылка, метка времени и миниатюра
                        </p>
                        <div style="display: flex;">
                            <button style="border: none;
                                        padding: 10px 15px;
                                        background: #2b354f;
                                        color: #fff;
                                        font-weight: 500;
                                        border-radius: 4px;
                                        margin-right: 20px;
                                        font-size: 1.12rem;
                                        cursor: pointer;" id="accept">
                                    Разрешить
                            </button>
                            <button style="border: none;
                                        padding: 10px 15px;
                                        background: transparent;
                                        color: #1e1e1e;
                                        font-weight: 500;
                                        border-radius: 4px;
                                        font-size: 1.12rem;
                                        cursor: pointer;" onclick="window.close()">Отклонить</button>
                        </div>
                    </div>`
                    );

                    newWin.document.getElementById("accept").addEventListener("click",() => {
                        setLoading(true)

                        setTimeout(() => {
                            setFormLoaded(true)
                            setLoading(false)

                            if (buttonOption === 3 || buttonOption === 4 || buttonOption === 5 || !pollForm) {
                                setPollVisible(false)
                                setAccept(true)
                            } else {
                                setPollVisible(true)

                            }

                        }, 2000)

                        newWin.close()
                    },false);

                }}>
                    <span className="auth-btn-icon">
                        <Inst />
                    </span>
                    <span className="auth-btn-content">
                        {buttonOption === 2 ? 'Авторизироваться и начать анализ' : 'Авторизация через инстаграм'}
                    </span>
                </Btn>
            </div>}

            <PayButton formLoaded={formLoaded} accepted={accepted}/>
        </div>
    )
}

export default FirstProto
