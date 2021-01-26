import React from 'react'
import puzzle from '../../icons/puzzle.svg'
import Timer from '../timer/Timer'
import Info from '../info/Info'
import Description from '../description/Description'
import styles from './PlayingField.module.sass'


const PlayingField = ({
    actionSeconds,
    gameSeconds,
    gameMinutes,
    gameHours,
    items,
    openCard
}) => {

    let i = 0
    return <div className={styles.wrapper}>
        <div className={styles.field}>
            {items.map(item => {
                i++
                return <PlayingFieldItem
                    key={item.id}
                    index={i-1}
                    icon={item.icon}
                    isOpen={item.isOpen}
                    finished={item.finished}
                    openCard={openCard}
                />
            })}
        </div>
        <Timer
            actionSeconds={actionSeconds}
            gameSeconds={gameSeconds}
            gameMinutes={gameMinutes}
            gameHours={gameHours}
        />
        <Info/>
        <Description/>
    </div>
}



const PlayingFieldItem = React.memo(({
    index,
    icon,
    isOpen,
    finished,
    openCard}) => {

    const visibleIcon = isOpen || finished ? icon : puzzle

    const toggleOpen = () => {
        if(isOpen || finished) {
            return
        }
        openCard(index)
    }

    const close = !(finished || isOpen)

    return <div onClick={toggleOpen} className={`${styles.item} ${close && styles.close}`}>
        <img className={styles.item_img} src={visibleIcon} alt="img"/>
    </div>
})

export default PlayingField