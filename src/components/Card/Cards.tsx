/* eslint-disable react-hooks/exhaustive-deps */
import "./Cards.scss";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import { useCallback, useEffect } from "react";
import Card from "./Card";
import Modal from "../Modal/Modal";
import Navigation from '../Navigation/Navigation';
import { Link } from "react-router-dom";
import {connect, useDispatch, useSelector} from 'react-redux'
import { createData, hideLoad, hideOpen,  showLoad, showOpen  } from "../../states/redux/actions";
import {initialData} from '../dataData'
import { CardsDataDTO } from "../../TStypes";

const Cards = (props: any) => {
    const dispatchRedux = useDispatch()
    const loading: any = useSelector(state=>state )
    let isLoad = loading.data.isLoad
    let isOpen = loading.data.isOpen

const getData = useCallback(()=>{
        dispatchRedux(showLoad())

        props.createData(initialData)

        dispatchRedux(hideLoad())

    },[dispatchRedux,props])

    useEffect(() => {
        getData()
    }, [ ])

    props.syncData.forEach((x: CardsDataDTO)=>{
        x.oldTitle = x.title;
        x.oldDescription = x.body;
    })

    const addCardHandler = async(title: string, text: string) => {
        let newData={
            title: title,
            body: text,
            id: uuidv4()
        }
        let copyOfItem = [...props.syncData]
        copyOfItem.push(newData)
        props.createData(copyOfItem)

        // axios.post(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newData)
        // }).then(res=> console.log('status:', res.status))
    };

    const toggleModal = () => {
        if(isOpen){
            dispatchRedux(hideOpen())
        }else {
            dispatchRedux(showOpen())
        }
    };

    return (
        <div className="App">
        <Link className="cards-link" to='/main'>MainPage</Link>
        <Navigation/>
        <Header />
        <div className={ isOpen ? "backdrop" : ""} onClick={toggleModal}></div>
        <div>
            <button className="btn-add" onClick={toggleModal}>Add Card</button>
        </div>
        { isOpen ? <Modal addCardHandler={addCardHandler} closeModal={toggleModal}/> : null}

        {isLoad ? <p>Loading...</p> : <Card/>}

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

export default connect(mapStateToProps, mapDispatchToProps) (Cards);
