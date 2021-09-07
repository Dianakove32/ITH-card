import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";

interface CardsDataDTO {
    title: string;
    oldTitle?: string;
    body: string;
    oldDescription?: string;
    id: string;
}

let initialState: CardsDataDTO[] = [
    {
        title: "Spain",
        body:
        "Is a country in Southwestern Europe with some pockets of territory in the Mediterranean Sea, offshore in the Atlantic Ocean and across the Strait of Gibraltar.",
        id: uuidv4(),
    },
    {
        title: "Egypt",
        body:
        "Officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula.",
        id: uuidv4(),
    },
    {
        title: "France",
        body:
        "Is a transcontinental country spanning Western Europe and several overseas regions and territories.",
        id: uuidv4(),
    },
];

const App = () => {
    const [data, setData] = useState(initialState);
    const [isEdit, setIsEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    function getData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data))
    }


    data.forEach(x=>{
        x.oldTitle = x.title;
        x.oldDescription = x.body;
    })

    const addCardHandler = (title: string, text: string) => {
        let newData={
            title: title,
            body: text,
            id: uuidv4()
        }

        // setData((prevData) => {
        // return [...prevData, newData];
        // });

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)

        })
        console.log(newData)
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
        <Header />
        <div className={isOpen ? "backdrop" : ""} onClick={toggleModal}></div>
        <div>
            <button className="btn-add" onClick={toggleModal}>Add Card</button>
        </div>
        {isOpen ? <Modal addCardHandler={addCardHandler} closeModal={toggleModal}/> : null}
        <Card
            data={data}
            removeCardHandler={removeCardHandler}
            editCardHandler={editCardHandler}
            isEdit={isEdit}
        />
        </div>
    );
};

export default App;
