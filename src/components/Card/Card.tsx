import { useState } from "react";
import "./Card.scss";

interface IPropsData {
  title: string;
  description: string;
  id: string;
}

interface IProps {
  data: IPropsData[];
  removeCardHandler: (id: string) => void;
  editCardHandler: () => void;
  isEdit: boolean;
}

const Card = (props: IProps) => {
    const { data, removeCardHandler, editCardHandler, isEdit } =
        props;

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredText, setEnteredText] = useState("");

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let item: IPropsData = data.find(el=>el.id===event.target.id)!

        setEnteredTitle(event.target.value);
        item.title = enteredTitle
    };

    const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let item: IPropsData = data.find(el=>el.id===event.target.id)!

        setEnteredText(event.target.value);
        item.description = enteredText
    };

    const saveCardHandler = () => {
        editCardHandler();
    };

    return (
        <div className="content-container">
        <div >
            <button className="btn-add" onClick={editCardHandler}>
            Edit
            </button>
            {isEdit ? (
            <button className="btn-add" onClick={saveCardHandler}>Save</button> ) : null}
        </div>
        <div className="cards-container">
        {data.map((el: IPropsData) => (
            <div className="card" key={el.id}>
            {isEdit ? (
                <span
                id={el.id}
                className="cross"
                onClick={() => removeCardHandler(el.id)}
                >
                &#10060;
                </span>
            ) : null}
            {isEdit ? (
                <form onSubmit={saveCardHandler}>
                <label htmlFor={el.id}>Title</label>
                <input
                id={el.id}
                    type="text"
                    defaultValue={el.title}
                    onChange={titleChangeHandler}
                />
                <label htmlFor={el.id}>Text</label>
                <textarea
                    id={el.id}
                    onChange={textChangeHandler}
                    defaultValue={el.description}
                />
                </form>
            ) : ( <div><h3>{el.title}</h3> <p>{el.description}</p></div>)}
            </div>
        ))}
        </div>
        </div>
    );
};

export default Card;
