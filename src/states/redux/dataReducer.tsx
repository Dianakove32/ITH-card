import { Action, ReducerState } from "../../TStypes"
import { CREATE_DATA, IS_EDIT, IS_LOAD, TOGGLE_MODAL} from "./types"
import {initialData} from '../../components/dataData'

const initialState:  ReducerState = {
 data: initialData,
 isEdit: false,
 isLoad: false,
 isOpen: false
}

export const dataReducer = (state: ReducerState = initialState, action: Action) => {
    switch(action.type){
        case CREATE_DATA:
            return{ ...state, data: (action as any).payload}
        case IS_EDIT:
            return{ ...state, isEdit: !state.isEdit}
        case IS_LOAD:
            return{ ...state, isLoad:!state.isLoad}
        case TOGGLE_MODAL:
            return{ ...state, isOpen: !state.isOpen}
        default: return state
    }

}