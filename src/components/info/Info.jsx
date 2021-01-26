import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {storage} from '../../utils/utils'
import styles from './Info.module.sass'


const Info = (props) => {

    // save results in storage
    useEffect(() => {
        if(props.resultList.length > 0) {
            storage('resultList', props.resultList)
        }
    }, [props.resultList])



    return <div className={styles.info}>
        <div className={styles.info_title}>
            Таблица результатов
        </div>
        <div className={styles.info_table}>
            {props.resultList.map(item => {
                return <TableItem
                    key={item.id}
                    itemId={item.id}
                    time={item.time}
                />
            })}
        </div>
    </div>
}


const TableItem = (props) => {
    return <div className={styles.item}>
        <span className={styles.item_count}>{props.itemId}</span>
        <span className={styles.item_check}>{props.time}</span>
    </div>
}



const mapStateToProps = (state) => {
    return {
        resultList: state.resultList
    }
}

export default React.memo(connect(mapStateToProps, null)(Info))