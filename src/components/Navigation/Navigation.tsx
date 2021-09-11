import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createData } from '../../states/redux/actions';
import { CardsDataDTO } from '../../TStypes';

const  Navigation = (props: any)=> {
const history = useHistory();

    const pushHistory = (id: string) => {
    let cardOneData: CardsDataDTO = props.syncData.find((el: { id: string })=> el.id===id)!

    let cardOne = {
        title: cardOneData.title,
        oldTitle: '',
        body: cardOneData.body,
        oldDescription: '',
        id: cardOneData.id,
    }
        history.push({
            pathname: `/cards/${id}`,
            state: {
                cardOne
            }
        })
    };

    return (
        <div >
            <div className="tabs-container">
            {props.syncData.map((el: CardsDataDTO, i: number) => (
            <div className="tab"
                key={el.id}
                onClick={()=>pushHistory(el.id)}><Link to={`/cards/${el.id}`}> {i+1} </Link></div>))}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        syncData: state.data.data,
    }
}

const mapDispatchToProps=  {
    createData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);