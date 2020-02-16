import React, {Component} from 'react';

import Preloader from "../Preloader"
import Btn from '../Btn'

export default class LoadersList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            photoAnalyzed: false,
            friendsAnalyzed: false,
            commentsAnalyzed: false,
            pending: false
        }
    }

    handleAnalyze = (type) => {
        this.setState({
            pending: true
        })

        setTimeout(() => {

            this.setState({
                pending: false,
                [type]: true
            })

        }, 2000)

    }


    render() {

        const { pending, photoAnalyzed ,friendsAnalyzed, commentsAnalyzed} = this.state

        if (!!photoAnalyzed && !!friendsAnalyzed && !!commentsAnalyzed) {
            return (
                <div>
                    <Btn>
                        перейти к рекомендациям
                    </Btn>
                </div>
            )
        }

        return (
            <div>
                <Btn disabled={pending || photoAnalyzed} onClick={() => {
                    this.handleAnalyze('photoAnalyzed')}}>
                    анализ фоток
                </Btn>
                <br/>
                <br/>
                <Btn disabled={pending || friendsAnalyzed} onClick={() => {
                    this.handleAnalyze('friendsAnalyzed')}}>
                    анализ друзей
                </Btn>
                <br/>
                <br/>
                <Btn disabled={pending || commentsAnalyzed} onClick={() => {
                    this.handleAnalyze('commentsAnalyzed')}}>
                    анализ комментариев
                </Btn>
                <br/>
                <br/>
                {pending &&  <Preloader />}

            </div>
        )
    }
}