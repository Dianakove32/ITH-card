/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import "./Modal.scss";

interface IPropsModal {
    addCardHandler: ( title: string, text: string) =>void;
    closeModal: ()=> void
}

const Modal = (props: IPropsModal  ) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredText, setEnteredText] = useState('');

    const addCardHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (enteredTitle.trim().length === 0 || enteredText.trim().length === 0) {
            return;
        }

        props.addCardHandler(enteredTitle, enteredText);

        setEnteredTitle('');
        setEnteredText('');
        props.closeModal();
    };

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
    };

    const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEnteredText(event.target.value);
    };
    return (
        <div className= 'modal-container'>
            <h3>Add info</h3>
            <form onSubmit={addCardHandler}>
                <label htmlFor="title">Title</label>
                <input
                id="title"
                type="text"
                defaultValue={enteredTitle}
                onChange={titleChangeHandler}

                />
                <label htmlFor="textarea">Text</label>
                <textarea
                id="textarea"
                onChange={textChangeHandler}
                defaultValue={enteredText}
                />
                <button role='button' className="btn-add" type="submit">Add </button>
            </form>
        </div>
    );
};

export default Modal;
