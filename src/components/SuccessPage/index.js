import React from "react";
import {
    layer, control, Controls,
    Map, Layers
} from "react-openlayers";

import style from './success.module.css'

const SuccessPage = () => {
    return  (
        <div>
            <div className={style.images}>
                <img src={`https://picsum.photos/1300/500`} alt="" style={{'maxWidth': '100%'}}/>
                <div className={style.meta}>
                    <h1 className={style.title}>
                        Burger Heroes
                    </h1>
                    <div>
                        Москва | Россия
                    </div>
                </div>

            </div>
            <div className={style.body}>
                <div className={style.details}>
                    <ul>
                        <li>
                            Понедельник
                            11:00 – 23:45
                        </li>
                        <li>
                            Вторник
                            11:00 – 23:45
                        </li>
                       <li>
                           Среда
                           11:00 – 23:45
                       </li>
                        <li>
                            Четверг
                            11:00 – 23:45
                        </li>
                       <li>
                           Пятница
                           11:00 – 23:45
                       </li>
                        <li>
                            Суббота
                            11:00 – 23:45
                        </li>
                        <li>
                            Воскресенье
                            11:00 – 23:45
                        </li>
                    </ul>
                </div>
                <div className={style.contacts}>
                    <div className={style['contacts-data']}>
                        <div className={style['contacts-data-item']}>
                            Большой Сухаревский пер., 25, стр. 1
                        </div>
                        <div className={style['contacts-data-item']}>
                            <a href="tel:+71111111111">
                                +7 (111) 111-11-11
                            </a>
                        </div>
                        <div className={style['contacts-data-item']}>
                            <a href="website.ru">
                                website.ru
                            </a>
                        </div>
                    </div>
                    <div className={style.map}>
                        <Map view={{center: [0, 0], zoom: 2}}>
                            <Layers>
                                <layer.Tile/>
                            </Layers>
                            <Controls attribution={false} zoom={true}>
                                <control.Rotate />
                                <control.ScaleLine />
                                <control.FullScreen />
                                <control.OverviewMap />
                                <control.ZoomSlider />
                                <control.ZoomToExtent />
                                <control.Zoom />
                            </Controls>
                        </Map>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SuccessPage