import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

interface CardsDataDTO {
    title: string;
    oldTitle?: string;
    body: string;
    oldDescription?: string;
    id: string ;
}

let url = 'https://jsonplaceholder.typicode.com/posts'

export default function Navigation() {
const [data, setData] = useState<CardsDataDTO[]>([]);
const history = useHistory();
    useEffect(() => {
        getData()
    }, [])

    async function getData(){

        const data = await axios.get(url)
        let newData= data.data.map((el:CardsDataDTO) =>{
            return {title: el.title,
                    body: el.body,
                    id: String(el.id),}
        })
        setData(newData)
    }

    const pushHistory = (id: string) => {
        let cardOneData: CardsDataDTO = data.find((el: { id: string })=> el.id===id)!
let cardOne={
    title: cardOneData.title,
    oldTitle: '',
    body: cardOneData.body,
    oldDescription: '',
    id: cardOneData.id,
}
        history.push({
            pathname: `/cards/${id}`,
            state: {
                cardOne
            }
        })
    };

    return (
        <div >
            <div className="tabs-container">
            {data.map((el: CardsDataDTO, i: number) => (
            <div className="tab"
                key={el.id}
                onClick={()=>pushHistory(el.id)}><Link to={`/cards/${el.id}`}> {i+1} </Link></div>))}
            </div>
        </div>
    )
}
