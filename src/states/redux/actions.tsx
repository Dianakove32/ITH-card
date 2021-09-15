import { CardsDataDTO } from "../../TStypes";
import { CREATE_DATA, FETCH_DATA, IS_EDIT, IS_LOAD, TOGGLE_MODAL,   } from "./types";

export function createData( data: CardsDataDTO[]){
    return{
        type: CREATE_DATA,
        payload: data
    }
}


let url = 'https://jsonplaceholder.typicode.com/posts?_limit=5'
export function fetchData(){
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        const res = await fetch(url)
        const json = await res.json()
        dispatch({type: FETCH_DATA, payload: json})
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
