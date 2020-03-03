import React, {Fragment} from "react";
import {
    layer, control, Controls,
    Map, Layers
} from "react-openlayers";

import style from './success.module.css'

import ResultMessage from "../ResultMessage";
import {RECOMMEND_RESULT_MESSAGE_OPTIONS, RECOMMENDATION_DEFAULT} from "../../util/uiOptions";
import { ReactComponent as Directions } from "../../assets/img/directions.svg";

const SuccessPage = (props) => {

    const location = new URL(window.location)
    const option = location.searchParams.get('resultMessage') || 1
    const resultMessageOption = RECOMMEND_RESULT_MESSAGE_OPTIONS[option]


    return  (
        <Fragment>
            {window.innerWidth > 767 ?
            <Fragment>
                <div >
                    <div className={style.images}>
                        <img src={`${location.searchParams.get('recommendationImgUrl') || RECOMMENDATION_DEFAULT.imageUrl}` } alt="" style={{'maxWidth': '100%'}}/>
                        <div className={`${style.meta}`}>
                            <h4 className={`${style.title} subtitle is-4 has-text-white-bis`}>
                                {location.searchParams.get('recommendationTitle') ?
                                    location.searchParams.get('recommendationTitle').replace(/["']/img, "") :
                                    RECOMMENDATION_DEFAULT.title
                                }
                            </h4>
                            <p className={'has-text-white-bis'}>
                                {location.searchParams.get('recommendationLocation') ?
                                    location.searchParams.get('recommendationLocation').replace(/["']/img, "") :
                                    RECOMMENDATION_DEFAULT.location
                                }
                            </p>
                        </div>
                        {resultMessageOption.action === 'refresh' &&
                        <div className={style.refreshBtn}>
                            <ResultMessage onRefresh={props.onResultMessageRefresh}/>
                        </div>
                        }

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
                                    {location.searchParams.get('recommendationAddress') ?
                                        location.searchParams.get('recommendationAddress').replace(/["']/img, "") :
                                        RECOMMENDATION_DEFAULT.address
                                    }
                                </div>
                                <div className={style['contacts-data-item']}>
                                    <a href="tel:+71111111111">
                                        {location.searchParams.get('recommendationPhone') ?
                                            location.searchParams.get('recommendationPhone').replace(/["']/img, "") :
                                            RECOMMENDATION_DEFAULT.phone
                                        }
                                    </a>
                                </div>
                                <div className={style['contacts-data-item']}>
                                    <a href={location.searchParams.get('recommendationWebSite') || RECOMMENDATION_DEFAULT.webSite}>
                                        {location.searchParams.get('recommendationWebSite') ?
                                            location.searchParams.get('recommendationWebSite').replace(/["']/img, "") :
                                            RECOMMENDATION_DEFAULT.webSite
                                        }
                                    </a>
                                </div>
                            </div>

                            <div className={style.map}>
                                <Map view={{center: [
                                        location.searchParams.get('recommendationLng') ?
                                            location.searchParams.get('recommendationLng').replace(/["']/img, "") :
                                            RECOMMENDATION_DEFAULT.lng,
                                        location.searchParams.get('recommendationLat') ?
                                            location.searchParams.get('recommendationLat').replace(/["']/img, "") :
                                            RECOMMENDATION_DEFAULT.lat
                                    ], zoom: location.searchParams.get('recommendationLng') ?
                                        location.searchParams.get('recommendationZoom').replace(/["']/img, "") :
                                        RECOMMENDATION_DEFAULT.zoom, projection: 'EPSG:4326',}} >
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

                {resultMessageOption.action !== 'refresh' && <ResultMessage />}
            </Fragment>
                : <Fragment>
                    <div className={style.map}>
                        <Map view={{center: [
                                location.searchParams.get('recommendationLng') ?
                                    location.searchParams.get('recommendationLng').replace(/["']/img, "") :
                                    RECOMMENDATION_DEFAULT.lng,
                                location.searchParams.get('recommendationLat') ?
                                    location.searchParams.get('recommendationLat').replace(/["']/img, "") :
                                    RECOMMENDATION_DEFAULT.lat
                            ], zoom: location.searchParams.get('recommendationLng') ?
                                location.searchParams.get('recommendationZoom').replace(/["']/img, "") :
                                RECOMMENDATION_DEFAULT.zoom, projection: 'EPSG:4326',}} >
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
                    <div className={style.images}>
                        <img src={`${location.searchParams.get('recommendationImgUrl') || RECOMMENDATION_DEFAULT.imageUrl}` } alt="" style={{'maxWidth': '100%'}}/>
                        <div className={`${style.meta}`}>
                            <div className={`${style.title} subtitle is-6`}>
                                {location.searchParams.get('recommendationTitle') ?
                                    location.searchParams.get('recommendationTitle').replace(/["']/img, "") :
                                    RECOMMENDATION_DEFAULT.title
                                }
                            </div>
                            <p>
                                {location.searchParams.get('recommendationLocation') ?
                                    location.searchParams.get('recommendationLocation').replace(/["']/img, "") :
                                    RECOMMENDATION_DEFAULT.location
                                }
                            </p>
                            <p className='is-small has-text-grey'>
                                {location.searchParams.get('recommendationLng') ?
                                    location.searchParams.get('recommendationLng').replace(/["']/img, "") :
                                    RECOMMENDATION_DEFAULT.lng} ,
                                {location.searchParams.get('recommendationLat') ?
                                    location.searchParams.get('recommendationLat').replace(/["']/img, "") :
                                    RECOMMENDATION_DEFAULT.lat}
                            </p>
                            <a href="#" className={style.directions}>
                                <Directions />
                            </a>
                        </div>
                    </div>
                    <div className={style.whiteblock}>
                        <div className={style['contacts-data']}>
                            <div className={style['contacts-data-item']}>
                                {location.searchParams.get('recommendationAddress') ?
                                    location.searchParams.get('recommendationAddress').replace(/["']/img, "") :
                                    RECOMMENDATION_DEFAULT.address
                                }
                            </div>
                            <div className={style['contacts-data-item']}>
                                <a href="tel:+71111111111">
                                    {location.searchParams.get('recommendationPhone') ?
                                        location.searchParams.get('recommendationPhone').replace(/["']/img, "") :
                                        RECOMMENDATION_DEFAULT.phone
                                    }
                                </a>
                            </div>
                            <div className={style['contacts-data-item']}>
                                <a href={location.searchParams.get('recommendationWebSite') || RECOMMENDATION_DEFAULT.webSite}>
                                    {location.searchParams.get('recommendationWebSite') ?
                                        location.searchParams.get('recommendationWebSite').replace(/["']/img, "") :
                                        RECOMMENDATION_DEFAULT.webSite
                                    }
                                </a>
                            </div>
                        </div>
                        {resultMessageOption.action === 'refresh' &&
                        <div className={style.refreshBtn}>
                            <ResultMessage onRefresh={props.onResultMessageRefresh}/>
                        </div>
                        }
                    </div>


                </Fragment>
            }
        </Fragment>



    )
}

export default SuccessPage