import { useState } from "react";
import Modal from "../Modal/Modal";
import "./AddCard.scss";

const AddCard = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredText, setEnteredText] = useState('');

    const addCardHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (enteredTitle.trim().length === 0 || enteredText.trim().length === 0) {
            return;
        }

        props.onAddCard(enteredTitle, enteredText);

        setEnteredTitle('');
        setEnteredText('');
        setIsOpen(false);
    };

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
    };

    const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEnteredText(event.target.value);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className={isOpen ? "backdrop" : ""} onClick={closeModal}></div>
            <div>
                <button className="btn-add" onClick={openModal}>Add Card</button>
            </div>
            {isOpen ? <Modal
                titleChangeHandler={titleChangeHandler}
                textChangeHandler={textChangeHandler}
                addCardHandler={addCardHandler}
                enteredTitle={enteredTitle}
                enteredText={enteredText}
            /> : null}
        </div>
    );
};

export default AddCard;
