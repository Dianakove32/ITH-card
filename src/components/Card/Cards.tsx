import "./Cards.scss";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "../Modal/Modal";
import axios from 'axios'
import { Link } from "react-router-dom";

interface CardsDataDTO {
    title: string;
    oldTitle?: string;
    body: string;
    oldDescription?: string;
    id: string;
}

// let initialState: CardsDataDTO[] = [
//     {
//         title: "Spain",
//         body:
//         "Is a country in Southwestern Europe with some pockets of territory in the Mediterranean Sea, offshore in the Atlantic Ocean and across the Strait of Gibraltar.",
//         id: uuidv4(),
//     },
//     {
//         title: "Egypt",
//         body:
//         "Officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula.",
//         id: uuidv4(),
//     },
//     {
//         title: "France",
//         body:
//         "Is a transcontinental country spanning Western Europe and several overseas regions and territories.",
//         id: uuidv4(),
//     },
// ];

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
        const data: any = await axios.get(url)
        setData(data.data)
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

        // setData((prevData) => {
        // return [...prevData, newData];
        // });

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
            <div className="nav-cards">
                <Link className="cards-link" to='/main'>MainPage</Link>
            </div>
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
