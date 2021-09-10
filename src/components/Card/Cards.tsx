import "./Cards.scss";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import { useEffect, useReducer } from "react";
import Card from "./Card";
import Modal from "../Modal/Modal";
import axios from 'axios'
import Navigation from '../Navigation/Navigation';
import { Link } from "react-router-dom";

interface CardsDataDTO {
    title: string;
    oldTitle?: string;
    body: string;
    oldDescription?: string;
    id: string ;
}

interface ReducerState {
    data:CardsDataDTO[],
    isEdit: boolean,
    isOpen: boolean,
    isLoading: boolean,
}

let initialReducerState: ReducerState = {
    data:[],
    isEdit: false,
    isOpen: false,
    isLoading: false,
}

type Action =
    | { type: 'ADD_DATA', data: CardsDataDTO[] }
    | { type: 'EDIT' }
    | { type: 'LOAD'}
    | { type: 'OPEN' }

const stateReducer = (state: ReducerState, action: Action): any => {
    if (action.type === 'ADD_DATA'){
        return {...state, data: action.data, }
    }
    if (action.type === 'EDIT'){
        return {
            ...state,
            isEdit: !state.isEdit
        }
    }
    if (action.type === 'LOAD'){
        return {
            ...state,
            isLoading: !state.isLoading
        }
    }
    if (action.type === 'OPEN'){
        return {
            ...state,
            isOpen: !state.isOpen
        }
    }
    return stateReducer
}

let url = 'https://jsonplaceholder.typicode.com/posts'

const Cards = () => {
    const [reducerState, dispatch] = useReducer(stateReducer, initialReducerState)


    useEffect(() => {
        getData()
    }, [])

    async function getData(){
        dispatch({type: 'LOAD'})
        const data = await axios.get(url)
        let newData= data.data.map((el:CardsDataDTO) =>{
            return {title: el.title,
                    body: el.body,
                    id: String(el.id),}
        })
        dispatch({type: 'ADD_DATA', data: newData})
        dispatch({type: 'LOAD'})
    }

    reducerState.data.forEach((x: CardsDataDTO)=>{
        x.oldTitle = x.title;
        x.oldDescription = x.body;
    })

    const addCardHandler = async(title: string, text: string) => {
        let newData={
            title: title,
            body: text,
            id: uuidv4()
        }
        let copyOfItem = [...reducerState.data]
        copyOfItem.push(newData)

        dispatch({type: 'ADD_DATA', data: copyOfItem })

        axios.post(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        }).then(res=> console.log('status:', res.status))
    };

    const removeCardHandler = (id: string) => {
        let filteredData = reducerState.data.filter((el: CardsDataDTO) => el.id !== id);

        dispatch({type: 'ADD_DATA', data: filteredData})
    };

    const editCardHandler = ( ) => {

        dispatch({type: 'EDIT'})
    };

    const toggleModal = () => {
        dispatch({type: 'OPEN'})
    };

    return (
        <div className="App">
        <Link className="cards-link" to='/main'>MainPage</Link>
        <Navigation/>
        <Header />
        <div className={reducerState.isOpen ? "backdrop" : ""} onClick={toggleModal}></div>
        <div>
            <button className="btn-add" onClick={toggleModal}>Add Card</button>
        </div>
        {reducerState.isOpen ? <Modal addCardHandler={addCardHandler} closeModal={toggleModal}/> : null}
        {reducerState.isLoading ? <p>Loading...</p> : <Card
            data={reducerState.data}
            removeCardHandler={removeCardHandler}
            editCardHandler={editCardHandler}
            isEdit={reducerState.isEdit}
        />}

        </div>
    );
};

export default Cards;
