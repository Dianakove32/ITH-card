import { connect, useDispatch, useSelector } from "react-redux";
import { createData, toggleIsEdit } from "../../states/redux/actions";
import { CardsDataDTO } from "../../TStypes";
import "./Card.scss";

const Card = (props: any) => {

    const dispatch = useDispatch()
    const loading: any = useSelector(state=>state )
    let isEdit = loading.data.isEdit

    const editCardHandler = () => {
        dispatch(toggleIsEdit())
    };

    const removeCardHandler = (id: string) => {
        let filteredData = props.syncData.filter((el: CardsDataDTO) => el.id !== id);
        props.createData(filteredData)
    };

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let id =  event.target.id
        let item: CardsDataDTO = props.syncData.find((el: { id: string; })=>String(el.id)===id)!

        item.title = event.target.value;
    };

    const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let id =  event.target.id
        let item: CardsDataDTO = props.syncData.find((el: { id: string; })=>String(el.id)=== id)!

        item.body = event.target.value
    };

    const saveCardHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        let arrTitle = props.syncData.every((el: { title: string; }) => el.title !== '')
        let arrDesc= props.syncData.every((el: { body: string; }) => el.body !== '')

        if (!arrTitle || !arrDesc ){
            return
        }
        props.syncData.forEach((x: CardsDataDTO)=>{
            x.oldTitle = x.title;
            x.oldDescription = x.body;
        })
        dispatch(toggleIsEdit())
   };

    const closeEditHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.syncData.forEach((x: CardsDataDTO)=>{
            x.title = x.oldTitle;
            x.body = x.oldDescription;
        })
        dispatch(toggleIsEdit())
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
        {props.syncData.map((el: CardsDataDTO) => (
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
                    defaultValue={el.body}
                />
                </form>
            ) : ( <div><h3>{el.title}</h3> <p>{el.body}</p></div>)}
            </div>
        ))}
        </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        syncData: state.data.data,
    }
}

const mapDispatchToProps=  {
    createData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
