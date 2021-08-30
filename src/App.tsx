import "./App.scss";
import { v4 as uuidv4 } from "uuid";

interface CardsDataDTO {
    title: string;
    description: string;
    id: string;
}

let data: CardsDataDTO[] = [
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
    return (
        <div className="App">
        <h1>itechart-react-course</h1>
        <div className="cards-container">
            {data.map((el) => (
            <div className="card" key={el.id}>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default App;
