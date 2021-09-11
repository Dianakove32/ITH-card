import { CardsDataDTO } from "../../TStypes";
import { CREATE_DATA,  HIDE_IS_EDIT,  HIDE_LOAD,  HIDE_OPEN,  SHOW_IS_EDIT, SHOW_LOAD, SHOW_OPEN } from "./types";

export function createData( data: CardsDataDTO[]){
    return{
        type: CREATE_DATA,
        payload: data
    }
}

export function showIsEdit(){
    return{
        type: SHOW_IS_EDIT,

    }
}
export function hideEdit( ){
    return{
        type: HIDE_IS_EDIT,

    }
}
export function showLoad( ){
    return{
        type: SHOW_LOAD,

    }
}
export function hideLoad( ){
    return{
        type: HIDE_LOAD,

    }
}
export function showOpen( ){
    return{
        type: SHOW_OPEN,

    }
}
export function hideOpen( ){
    return{
        type: HIDE_OPEN,

    }
}