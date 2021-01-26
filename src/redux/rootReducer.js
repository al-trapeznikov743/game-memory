import { storage } from '../utils/utils'
import {arrayItemsCreator} from './items'
import {
    SET_ACTIVE_ITEM,
    SET_CLOSING_ITEM,
    SET_OPEN,
    SET_OPEN_LIST,
    SET_RESULT_LIST,
    SET_START,
    SET_TIMER,
    SET_TIMER_ACTION} from './types'


const items = arrayItemsCreator()

const initialState = {
    activeItems: [],
    items: items,
    openList: [],
    resultList: storage('resultList') || [],
    timer: false,
    start: false,
    timerAction: false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_OPEN: {
            const item = state.items[action.index]

            const nextItems = [...state.items]
            nextItems[action.index] = {...item, isOpen: !item.isOpen}

            return {
                ...state,
                items: nextItems
            }
        }
        case SET_ACTIVE_ITEM: {
            if(!action.index && action.index !== 0) {
                return {
                    ...state,
                    activeItems: []
                }
            } else {
                const {property} = state.items[action.index]
                return {
                    ...state,
                    activeItems: [...state.activeItems, property]
                }
            }
        }
        case SET_OPEN_LIST: {
            return {
                ...state,
                openList: [...state.openList, action.property]
            }
        }
        case SET_CLOSING_ITEM: {
            if(state.openList.length === 0) {
                const itemsArr = [...state.items]
                itemsArr.map(item => {
                    return item.isOpen = false
                })
                return {
                    ...state,
                    items: itemsArr
                }
            }
            if(state.openList.length > 0) {
                const itemsArr = [...state.items]

                for(let i = 0; i < state.openList.length; i++) {
                    for(let j = 0; j < itemsArr.length; j++) {
                        if(itemsArr[j].property !== state.openList[i]) {
                            itemsArr[j].isOpen = false
                        } else {
                            itemsArr[j].finished = true
                        }
                    }
                }
                return {
                    ...state,
                    items: itemsArr
                }
            }
            return state
        }
        case SET_TIMER: {
            return {
                ...state,
                timer: !state.timer
            }
        }
        case SET_START: {
            return {
                ...state,
                start: true
            }
        }
        case SET_TIMER_ACTION: {
            return {
                ...state,
                timerAction: !state.timerAction
            }
        }
        case SET_RESULT_LIST: {
            const hours = action.payload.hour
            const minutes = action.payload.min
            const seconds = action.payload.sec
            const time = `${hours}:${minutes}:${seconds}`
            
            return {
                ...state,
                resultList: [
                    ...state.resultList,
                    {
                        id: state.resultList.length === 0
                            ? 1
                            : state.resultList[state.resultList.length-1].id+1,
                        time: time
                    }
                ]
            }
        }
        default: return state
    }
}