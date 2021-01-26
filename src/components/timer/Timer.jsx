import React from  'react'
import {addLeadingZeros} from '../../utils/utils'
import styles from './Timer.module.sass'


const Timer = (props) => {

    const seconds = addLeadingZeros(props.gameSeconds)
    const minutes = addLeadingZeros(props.gameMinutes)
    const hours = addLeadingZeros(props.gameHours)

    return <div>
        <div className={styles.timer}>
            <div className={styles.timer__game}>
                <div className={styles.timer__game_title}>Game time</div>
                <div className={styles.timer__game_time}>
                    {hours} : {minutes} : {seconds}
                </div>
            </div>
        </div>
    </div>
}

export default Timer