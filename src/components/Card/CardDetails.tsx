import { connect } from "react-redux";
import { useRef, useState, MutableRefObject, useEffect,  } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { createData } from "../../states/redux/actions";

function CardDetails(props: any)  {
    const params: any  = useParams();
    const cardRef  = useRef() as MutableRefObject<HTMLDivElement> ;
    const [isEdit, setIsEdit] = useState(false);

    let data: { oldTitle?: string; title: any; oldDescription?: any; body: any; id?: any; }

    data = props.syncData.find((el: { id: string; })=> el.id === params.id)

    if( data){
        data.oldTitle = data.title;
        data.oldDescription = data.body;
    }else{
        data = {
            title: 'there is no card\'s information',
            body:'choose another one'
        }
    }

    useEffect(()=>{
        setIsEdit(false)
    }, [data])

    const editCardHandler = ( ) => {
        setIsEdit(!isEdit);
    };

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(data){
            data.title = event.target.value;
        }

    };

    const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        data.body = event.target.value
    };

    const removeCardHandler = (id: string) => {

        let filteredData = props.syncData.filter((el: any) => el.id !== id);
        props.createData(filteredData)
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
                <div className="card"  id={data.id} ref={cardRef}>
            {isEdit ? (
                <span
                id={data.id}
                className="cross"
                onClick={()=>removeCardHandler(data.id)}
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
const mapDispatchToProps=  {
    createData,
}

const mapStateToProps = (state: any) => {
    return {
    syncData: state.data.data,
}
}

export default connect(mapStateToProps, mapDispatchToProps) (CardDetails);