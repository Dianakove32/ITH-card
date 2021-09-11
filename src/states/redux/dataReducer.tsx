import { Action, ReducerState } from "../../TStypes"
import { CREATE_DATA, HIDE_IS_EDIT, HIDE_LOAD, HIDE_OPEN, SHOW_IS_EDIT, SHOW_LOAD, SHOW_OPEN,   } from "./types"

const initialState:  ReducerState = {
 data: [],
 isEdit: false,
 isLoad: false,
 isOpen: false
}
export const dataReducer = (state: ReducerState = initialState, action: Action) => {
    switch(action.type){
        case CREATE_DATA:
            return{ ...state, data: (action as any).payload}
        case SHOW_IS_EDIT:
            return{ ...state, isEdit: true}
        case HIDE_IS_EDIT:
            return{ ...state, isEdit: false}
        case SHOW_LOAD:
            return{ ...state, isLoad: true}
        case HIDE_LOAD:
            return{ ...state, isLoad: false}
        case SHOW_OPEN:
            return{ ...state, isOpen: true}
        case HIDE_OPEN:
            return{ ...state, isOpen: false}
        default: return state
    }

}