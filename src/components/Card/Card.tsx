import './Card.scss'

interface IProps {
    title: string;
    description: string;
    id: string;

}

const Card = (props: { data: IProps[], removeCardHandler: (id:any) => void; }) => {
const {data,removeCardHandler} = props

    return (
        <div className="cards-container">
        {data.map((el: IProps) => (
            <div className="card" key={el.id}>
            <span id={el.id} onClick = {()=>removeCardHandler(el.id) }>&#10060;</span>
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <button>Edit</button>
            </div>
        ))}
        </div>
    );
};

export default Card;
function id(id: any): void {
    throw new Error('Function not implemented.');
}

