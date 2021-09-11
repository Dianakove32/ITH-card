import { v4 as uuidv4 } from "uuid";
import { CardsDataDTO } from "../TStypes";

export  const  initialData: CardsDataDTO[] = [
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