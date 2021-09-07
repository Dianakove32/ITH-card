import "./Card.scss";

interface IPropsData {
  title?: string;
  oldTitle?: string;
  description?: string;
  oldDescription?: string;
  id: string;
}

interface IProps {
  data: IPropsData [];
  removeCardHandler: (id: string) => void;
  editCardHandler: () => void;
  isEdit: boolean;
}

const Card = (props: IProps) => {

    const { data, removeCardHandler, editCardHandler, isEdit } = props;

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let item: IPropsData = data.find(el=>el.id===event.target.id)!

        item.title = event.target.value;
    };

    const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let item: IPropsData = data.find(el=>el.id===event.target.id)!

        item.description = event.target.value
    };

    const saveCardHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        let arrTitle = data.every(el => el.title !== '')
        let arrDesc= data.every(el => el.description !== '')

        if (!arrTitle || !arrDesc ){
            return
        }
        data.forEach(x=>{
            x.oldTitle = x.title;
            x.oldDescription = x.description;
        })
        editCardHandler();
    };

    const closeEditHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        data.forEach(x=>{
            x.title = x.oldTitle;
            x.description = x.oldDescription;
        })
                editCardHandler();
    };

    return (
        <div className="content-container">
        <div >
            <button className="btn-add" onClick={isEdit ?closeEditHandler  : editCardHandler}>
            {isEdit ? 'Cancel' : 'Edit'}
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
