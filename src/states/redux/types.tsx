import { CardsDataDTO } from "../../TStypes"

export type Action =
| { type: 'DATA/CREATE_DATA', data: CardsDataDTO[] }
| { type: 'DATA/FETCH_DATA', fetch_data: any[] }
| { type: 'IS_EDIT' }
| { type: 'IS_LOAD' }
| { type: 'TOGGLE_MODAL' }


export const CREATE_DATA = 'DATA/CREATE_DATA'
export const IS_EDIT = 'IS_EDIT'
export const IS_LOAD = 'IS_LOAD'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

export const FETCH_DATA = 'DATA/FETCH_DATA'