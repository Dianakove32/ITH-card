import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import { useState } from "react";
import Card from "./components/Card/Card";
import AddCard from "./components/Card/AddCard";

interface CardsDataDTO {
    title: string;
    description: string;
    id: string;
}

let initialState: CardsDataDTO[] = [
    {
        title: "Spain",
        description:
        "Is a country in Southwestern Europe with some pockets of territory in the Mediterranean Sea, offshore in the Atlantic Ocean and across the Strait of Gibraltar.",
        id: uuidv4(),
    },
    {
        title: "Egypt",
        description:
        "Officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula.",
        id: uuidv4(),
    },
    {
        title: "France",
        description:
        "Is a transcontinental country spanning Western Europe and several overseas regions and territories.",
        id: uuidv4(),
    },
];

const App = () => {
    const [data, setData] = useState(initialState)

    const addCardHandler = ( title: string, text: string) => {

        setData((prevData)=>{
            return [
                ...prevData,
                {title:title, description: text, id: uuidv4()}
            ]
        })
    }

    const removeCardHandler = ( id: string) => {
        let filteredData = data.filter(el=> el.id !== id)

        setData(filteredData)
    }

    return (
        <div className="App">
        <Header/>
        <AddCard onAddCard={addCardHandler}/>
        <Card data={data} removeCardHandler={removeCardHandler}/>
        </div>
    );
};

export default App;
