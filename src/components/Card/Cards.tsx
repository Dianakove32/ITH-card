import "./Cards.scss";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import { useEffect, useState  } from "react";
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

let url = 'https://jsonplaceholder.typicode.com/posts'

const Cards = () => {
    const [data, setData] = useState<CardsDataDTO[]>([]);
    const [isEdit, setIsEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getData()
    }, [])

    async function getData(){
        setIsLoading(true);
        const data = await axios.get(url)
        let newData= data.data.map((el:CardsDataDTO) =>{
            return {title: el.title,
                    body: el.body,
                    id: String(el.id),}
        })
        setData(newData)
        setIsLoading(false);
    }

    data.forEach(x=>{
        x.oldTitle = x.title;
        x.oldDescription = x.body;
    })

    const addCardHandler = async(title: string, text: string) => {
        let newData={
            title: title,
            body: text,
            id: uuidv4()
        }

        setData((prevData) => {
        return [newData, ...prevData ];
        });

        axios.post(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        }).then(res=> console.log('status:', res.status))
    };

    const removeCardHandler = (id: string) => {
        let filteredData = data.filter((el) => el.id !== id);

        setData(filteredData);
    };

    const editCardHandler = ( ) => {

        setIsEdit(!isEdit);
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="App">
        <Link className="cards-link" to='/main'>MainPage</Link>
        <Navigation/>
        <Header />
        <div className={isOpen ? "backdrop" : ""} onClick={toggleModal}></div>
        <div>
            <button className="btn-add" onClick={toggleModal}>Add Card</button>
        </div>
        {isOpen ? <Modal addCardHandler={addCardHandler} closeModal={toggleModal}/> : null}
        {isLoading ? <p>Loading...</p> : <Card
            data={data}
            removeCardHandler={removeCardHandler}
            editCardHandler={editCardHandler}
            isEdit={isEdit}
        />}

        </div>
    );
};

export default Cards;
