import './Card.scss'

interface IPropsData {
    title: string;
    description: string;
    id: string;
}

interface IProps {
    data: IPropsData[]
    removeCardHandler: (id: string) => void;
    editCardHandler: (id: string) => void;
    isEdit:boolean
}

const Card = (props: IProps) => {
const {data,removeCardHandler, editCardHandler,isEdit } = props

    return (
        <div className="cards-container">
        {data.map((el: IPropsData) => (
            <div className="card" key={el.id}>
            {isEdit ? <span id={el.id} onClick = {()=>removeCardHandler(el.id) }>&#10060;</span> : null}
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <button id={el.id} onClick={()=>editCardHandler(el.id)}>Edit</button>
            </div>
        ))}
        </div>
    );
};

export default Card;


