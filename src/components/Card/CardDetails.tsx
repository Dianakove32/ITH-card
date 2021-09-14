import { useRef, useState, MutableRefObject, useEffect } from "react";
import {  Link, useHistory } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function CardDetails()  {
    const history: any  = useHistory();
    const cardRef  = useRef() as MutableRefObject<HTMLDivElement> ;
    const [isEdit, setIsEdit] = useState(false);

    const data = history.location.state.cardOne;
    data.oldTitle = data.title;
    data.oldDescription = data.body;

useEffect(()=>{
    cardRef.current.style.display='block'
    setIsEdit(false)
}, [data])

    const editCardHandler = ( ) => {
        setIsEdit(!isEdit);
    };

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        data.title = event.target.value;
    };

    const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        data.body = event.target.value
    };

    const removeCardHandler = () => {
        cardRef.current.style.display='none'
    };

    const saveCardHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        let arrTitle = data.title
        let arrDesc= data.body

        if (!arrTitle || !arrDesc ){
            return
        }

        data.oldTitle = data.title;
        data.oldDescription = data.body;

        editCardHandler();
    };

    const closeEditHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        data.title = data.oldTitle;
        data.body = data.oldDescription;

        if(cardRef.current.style.display==='none'){
            cardRef.current.style.display='block'
        }

        editCardHandler();
    };

    return (
        <div>
            <h3><Link className="cards-link" to='/cards'>All Cards</Link></h3>
            <Navigation/>
            <button className="btn-add" onClick={isEdit ? closeEditHandler  : editCardHandler}>
            {isEdit ? 'Cancel' : 'Edit'}
            </button>
            {isEdit ? (
            <button className="btn-add" onClick={saveCardHandler}>Save</button> ) : null}
            <div className="cardContainer">
                <div className="card" ref={cardRef}>
            {isEdit ? (
                <span
                id={data.id}
                className="cross"
                onClick={removeCardHandler}
                >
                &#10060;
                </span>
            ) : null}
            {isEdit ? (
                <form   onSubmit={saveCardHandler}>
                <label htmlFor={data.id}>Title</label>
                <input
                id={data.id}
                    type="text"
                    defaultValue={data.title}
                    onChange={titleChangeHandler}
                />
                <label htmlFor={data.id}>Text</label>
                <textarea
                    id={data.id}
                    onChange={textChangeHandler}
                    defaultValue={data.body}
                />
                </form>
            ) : (<div >
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            </div>
            )}
</div>
            </div>

        </div>
    );
}
