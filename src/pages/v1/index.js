import React, { useState } from 'react';

import Btn from '../../components/Btn'

import Preloader from '../../components/Preloader'
import ResultMessage from '../../components/ResultMessage'

const FirstProto = () => {


    const [accepted, setAccept] = useState(false)
    const [loading, setLoading] = useState(false)


    if (loading) {
        return (
            <div className={'tc'} style={{'maxWidth': '400px', 'margin': '20px auto'}}>
                <Preloader />
                <br/>
                <p>
                    Собираю данные
                </p>
            </div>
        )
    }

    if (accepted) {
        return (
            <div className={'tc'} style={{'maxWidth': '400px', 'margin': '20px auto'}}>
                <img src={`https://picsum.photos/400/300`} alt="" style={{'maxWidth': '100%'}}/>
                <ResultMessage onRefresh={() => {
                    setLoading(true)

                    setTimeout(() => {
                        setAccept(true)
                        setLoading(false)
                    }, 2000)

                }}/>
            </div>
        )
    }


    return (
        <div className="tc">
            <Btn onClick={() => {

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
                            setAccept(true)
                            setLoading(false)
                        }, 2000)

                        newWin.close()
                },false);

            }}>
                Авторизация через инстаграм
            </Btn>
        </div>
    )
}

export default FirstProto
