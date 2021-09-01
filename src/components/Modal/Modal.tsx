import React from "react";
import "./Modal.scss";

interface IPropsModal {
    addCardHandler: (e:{ preventDefault: () => void; })=>void,
    titleChangeHandler: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    textChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>)=>void,
    enteredTitle: string,
    enteredText: string,

}

const Modal = ({addCardHandler, enteredTitle, titleChangeHandler, enteredText, textChangeHandler}: IPropsModal) => {

    return (
        <div className= 'modal-container'>
            <h3>Add info</h3>
            <form onSubmit={addCardHandler}>
                <label htmlFor="title">Title</label>
                <input
                id="title"
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                />
                <label htmlFor="textarea">Text</label>
                <textarea
                id="textarea"
                onChange={textChangeHandler}
                value={enteredText}
                />
                <button className="btn-add" type="submit">Add </button>
            </form>
        </div>
    );
};

export default Modal;
