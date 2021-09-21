/* eslint-disable react-hooks/exhaustive-deps */
import "./Cards.scss";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Modal from "../Modal/Modal";
import Navigation from '../Navigation/Navigation';
import { Link, Route } from "react-router-dom";
import {connect, useDispatch, useSelector} from 'react-redux'
import { createData, fetchData, toggleIsLoad, toggleIsOpen } from "../../states/redux/actions";
import { CardsDataDTO } from "../../TStypes";

const Cards = (props: any) => {
    let [dataFetch, setDataFetch]=useState([])
    const dispatchRedux = useDispatch()
    const loading: any = useSelector(state=>state )
    let isLoad = loading.data.isLoad
    let isOpen = loading.data.isOpen
    let data = loading.data.data
    let fetch_data = loading.data.fetch_data

    useEffect(() => {
        props.fetchData()
    }, [ ])

const getData = useCallback(()=>{
        dispatchRedux(toggleIsLoad())

        setDataFetch(fetch_data)
        props.createData(dataFetch)

        dispatchRedux(toggleIsLoad())
    },[dispatchRedux, fetch_data, props, dataFetch])

    useEffect(() => {

        getData()
    }, [getData ])

    props.syncData.forEach((x: CardsDataDTO)=>{
        x.oldTitle = x.title;
        x.oldDescription = x.body;
    })

    const addCardHandler =  (title: string, text: string) => {
        let newData={
            title: title,
            body: text,
            id: uuidv4()
        }

        let copyOfItem = [...data]
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
        dispatchRedux(toggleIsOpen())
    };

    return (
        <div className="App">
            <Route>
                <Link className="cards-link" to='/main'>MainPage</Link>
            </Route>

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
        asyncData: state.data.fetch_data,
    }
}

const mapDispatchToProps=  {
    createData,
    fetchData,
}

export default connect(mapStateToProps, mapDispatchToProps) (Cards);
