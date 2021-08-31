import './Card.scss'

interface IProps {
    title: string;
    description: string;
    id: string;
}

const Card = (props: { data: IProps[]; }) => {
const {data} = props

    return (
        <div className="cards-container">
        {data.map((el: IProps) => (
            <div className="card" key={el.id}>
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            </div>
        ))}
        </div>
    );
};

export default Card;
