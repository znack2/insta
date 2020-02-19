import React, {Fragment, useState} from 'react';

import Btn from '../../components/Btn'

import Preloader from '../../components/Preloader'
import ResultMessage from '../../components/ResultMessage'
import PollForm from '../../components/PollForm'
import SuccessPage from '../../components/SuccessPage'
import PayButton from "../../components/PayButton";
import LoadersList from "../../components/LoadersList";

import { PAYMENT_BUTTONS } from '../../util/uiOptions'
import MainTitle from "../../components/MainTitle";
import inst from "../../assets/img/inst.png";

const Header = () => {

    const location = new URL(window.location)


    return (
        <div className="tc" style={{
            maxWidth: '500px',
            fontSize: '1.56rem',
            margin: '0 auto',
            padding: '20px',
            lineHeight: '1.21'
        }}>
            <p className={'is-medium'}>
                <MainTitle option={location.searchParams.get('mainTitle')} />
            </p>
            <br/>
            <img src={inst} alt="" style={{
                maxWidth: '100%'
            }}/>
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
                    <p className={'is-medium'}>
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
        } else if (!(formLoaded && paymentButton && PAYMENT_BUTTONS[paymentButton] &&  PAYMENT_BUTTONS[paymentButton].action === 'buy')) {
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
            <div className={'tc'} style={{'width': '100%', 'margin': '20px auto'}}>
                {resultMarkup}

                {formLoaded && (paymentButton ?  PAYMENT_BUTTONS[paymentButton] &&  PAYMENT_BUTTONS[paymentButton].action === 'buy' : true) &&
                    <div style={{marginTop: `30px`}}>
                        <div dangerouslySetInnerHTML={{__html: `
<style type="text/css">
#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://stayandsmile.us4.list-manage.com/subscribe/post?u=24e39dfc101fdfd353eefbd32&amp;id=37fbf0a0ba" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
    <div id="mc_embed_signup_scroll">
<label for="mce-EMAIL">Subscribe</label>
<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_24e39dfc101fdfd353eefbd32_37fbf0a0ba" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>`}}/>
                    </div>
                }

                <PayButton formLoaded={formLoaded} accepted={accepted}/>
            </div>
        )
    }


    return (
        <div className="tc">
            <Header />
            {paymentButton !== 1 && <Btn onClick={() => {

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
                {buttonOption === 2 ? 'Авторизироваться и начать анализ' : 'Авторизация через инстаграм'}
            </Btn>}

            <PayButton formLoaded={formLoaded} accepted={accepted}/>
        </div>
    )
}

export default FirstProto
