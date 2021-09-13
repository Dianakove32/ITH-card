
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
    | { type: 'IS_EDIT' }
    | { type: 'IS_LOAD' }
    | { type: 'TOGGLE_MODAL' }
