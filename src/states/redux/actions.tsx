import { CardsDataDTO } from "../../TStypes";
import { CREATE_DATA, IS_EDIT, IS_LOAD, TOGGLE_MODAL,   } from "./types";

export function createData( data: CardsDataDTO[]){
    return{
        type: CREATE_DATA,
        payload: data
    }
}

export function toggleIsEdit(){
    return{
        type: IS_EDIT,
    }
}

export function toggleIsLoad( ){
    return{
        type: IS_LOAD,

    }
}

export function toggleIsOpen( ){
    return{
        type: TOGGLE_MODAL,

    }
}
