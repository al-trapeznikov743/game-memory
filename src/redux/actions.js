import {
    SET_OPEN,
    SET_ACTIVE_ITEM,
    SET_OPEN_LIST,
    SET_CLOSING_ITEM,
    SET_TIMER,
    SET_START,
    SET_RESULT_LIST,
    SET_TIMER_ACTION} from './types'

const setOpen = (index) => {
    return {
        type: SET_OPEN,
        index
    }
}

export const setActiveItems = (index) => {
    return {
        type: SET_ACTIVE_ITEM,
        index
    }
}

const setOpenList = (property) => {
    return {
        type: SET_OPEN_LIST,
        property
    }
}

export const setClosingItem = () => {
    return {
        type: SET_CLOSING_ITEM
    }
}

export const setTimer = () => {
    return {
        type: SET_TIMER
    }
}

const setStart = () => {
    return {
        type: SET_START
    }
}

const setTimerAction = () => {
    return {
        type: SET_TIMER_ACTION
    }
}

export const setResultList = (payload) => {
    return {
        type: SET_RESULT_LIST,
        payload
    }
}



export const openCard = (index) => {
    return (dispatch, getState) => {
        const state = getState()
        if(!state.start) {
            dispatch(setStart())
            dispatch(setTimer())
        }
        if(state.activeItems.length === 0) {
            dispatch(setOpen(index))
            dispatch(setActiveItems(index))
            dispatch(setTimerAction())
        } else if(state.activeItems.length === 1) {
            dispatch(setOpen(index))
            dispatch(setActiveItems(index))
        } else if(state.activeItems.length > 1) {
            return
        }
    }
}

export const endAction = () => {
    return (dispatch, getState) => {
        
        const state = getState()

        if(state.activeItems.length === 2) {
            if(state.activeItems[0] === state.activeItems[1]) {
                dispatch(setOpenList(state.activeItems[0]))
                dispatch(setActiveItems(null))
                dispatch(setClosingItem())
            } else {
                dispatch(setActiveItems(null))
                dispatch(setClosingItem())
            }
        } else {
            dispatch(setActiveItems(null))
            dispatch(setClosingItem())
        }
        dispatch(setTimerAction())
    }

}