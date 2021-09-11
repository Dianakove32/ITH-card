
export interface CardsDataDTO {
    title?: string;
    oldTitle?: string;
    body?: string;
    oldDescription?: string;
    id: string ;
}
export interface ReducerState {
    data:CardsDataDTO[],
    isEdit: boolean,
    isOpen: boolean,
    isLoad: boolean,
    }

export type Action =
    | { type: 'DATA/CREATE_DATA', data: CardsDataDTO[] }
    | { type: 'SHOW_IS_EDIT' }
    | { type: 'HIDE_IS_EDIT'}
    | { type: 'SHOW_LOAD' }
    | { type: 'HIDE_LOAD' }
    | { type: 'SHOW_OPEN' }
    | { type: 'HIDE_OPEN' }