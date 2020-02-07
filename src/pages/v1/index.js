import React, { useState } from 'react';

import Btn from '../../components/Btn'

const FirstProto = () => {


    const [accepted, setAccept] = useState(false)

    if (accepted) {
        return (
            <div className={'tc'} style={{'maxWidth': '400px', 'margin': '20px auto'}}>
                <img src={`https://picsum.photos/400/300`} alt="" style={{'maxWidth': '100%'}}/>
            </div>
        )
    }


    return (
        <div className="tc">
            <Btn onClick={() => {

                const newWin = window.open("about:blank", "auth", "width=500,height=500");

                newWin.document.write(
                    `<div style="padding: 20px;">
                        <p>
                            Приложение запрашивает доступ к Вашему профилю в instagram
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

                newWin.document.getElementById("accept").addEventListener("click",(e) => {
                    setAccept(true)
                    newWin.close()
                },false);

            }}>
                Авторизация через инстаграм
            </Btn>
        </div>

    )
}

export default FirstProto
