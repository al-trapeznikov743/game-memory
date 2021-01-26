import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {
    openCard,
    setTimer,
    endAction,
    setResultList
} from '../../redux/actions'
import {addLeadingZeros} from '../../utils/utils'
import PlayingField from './PlayingField'


const PlayingFieldContainer = ({
    items,
    openCard,
    endAction,
    setTimer,
    openList,
    setResultList,
    timer,
    timerAction,
    activeItems
}) => {



    // проверяем равны ли открытые карты по свойству
    useEffect(() => {
        if(activeItems.length === 2) {
            const isEqual = activeItems[0] === activeItems[1]
            if(isEqual) {
                endAction()
            }
        }
    // eslint-disable-next-line
    }, [activeItems])




    // action timer
    let [actionSeconds, setActionSeconds] = useState(0)
    let [intervalId, setIntervalId] = useState(null)

    useEffect(() => {
        if(actionSeconds >= 2) {
            endAction()
        }
    // eslint-disable-next-line
    }, [actionSeconds])

    useEffect(() => {
        if(timerAction) {
            const actionTimerId = setInterval(() => {
                setActionSeconds(actionSeconds => actionSeconds+1)
            }, 1000)
            setIntervalId(actionTimerId)
        } else {
            clearInterval(intervalId)
            setActionSeconds(0)
        }
    // eslint-disable-next-line
    }, [timerAction])

    /* ывываывывпывпывпв
    ывываывывпывпывпввпывпыв
    ывываывывпывпывпвывпывп
    ывываывывпывпывпввпывпывывп
    ывп
    ыв
    пы
    вп
    ывп */

    // game timer
    let [gameSeconds, setGameSeconds] = useState(0)
    let [gameMinutes, setGameMinutes] = useState(0)
    let [gameHours, setGameHours] = useState(0)
    let [gameIntervalId, setGameIntervalId] = useState(null)

    // toggle game timer
    useEffect(() => {
        if((openList.length*2) === items.length) {
            setTimer()

            setGameSeconds(0)
            setGameMinutes(0)
            setGameHours(0)

            const sec = addLeadingZeros(gameSeconds)
            const min = addLeadingZeros(gameMinutes)
            const hour = addLeadingZeros(gameHours)

            setResultList({
                sec,
                min,
                hour
            })
        }
    // eslint-disable-next-line
    }, [openList.length])

    useEffect(() => {
        if(timer) {
            const gameTimerId = setInterval(() => {
                setGameSeconds(gameSeconds => gameSeconds+1)
            }, 1000)
            setGameIntervalId(gameTimerId)
        } else {
            clearInterval(gameIntervalId)
        }
    // eslint-disable-next-line
    }, [timer])

    useEffect(() => {
        if(gameSeconds === 60) {
            setGameSeconds(0)
            setGameMinutes(gameMinutes => gameMinutes+1)
        }
        if(gameMinutes === 60) {
            setGameMinutes(0)
            setGameHours(gameHours => gameHours+1)
        }
    // eslint-disable-next-line
    }, [gameSeconds, gameMinutes])



    return <PlayingField
        actionSeconds={actionSeconds}
        gameSeconds={gameSeconds}
        gameMinutes={gameMinutes}
        gameHours={gameHours}
        items={items}
        openCard={openCard}
    />
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        openList: state.openList,
        timer: state.timer,
        timerAction: state.timerAction,
        activeItems: state.activeItems
    }
}

export default connect(mapStateToProps, {
    openCard,
    setTimer,
    endAction,
    setResultList
})(PlayingFieldContainer)