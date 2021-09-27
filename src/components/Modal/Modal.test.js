import  ReactDOM  from "react-dom";
import Modal from "./Modal";
import { createData } from "../../states/redux/actions";
import { dataReducer } from "../../states/redux/dataReducer";

it('renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Modal/>, div)
})

    let newData = {
        title: "Hello",
        body:
        "Im fine",
        id: 2,
    }

    const state  = {
        data: [   {
            title: "Spain",
            body:
            "Is a country in Southwestern Europe with some pockets of territory in the Mediterranean Sea, offshore in the Atlantic Ocean and across the Strait of Gibraltar.",
            id: 1,
        },],
        fetch_data:  [] ,
        isEdit: false,
        isLoad: false,
        isOpen: false
    }

it('new card should be added', ()=>{

    let copyOfItem = [...state.data]
    copyOfItem.push(newData)

    let newState = dataReducer(state, createData(copyOfItem))
    expect(newState.data.length).toBe(2)
    expect(newState.data[1].title).toBe("Hello")
    expect(newState.data[1].body).toBe("Im fine")
})

it('new title should be "Hello"', ()=>{

    let copyOfItem = [...state.data]
    copyOfItem.push(newData)

    let newState = dataReducer(state, createData(copyOfItem))

    expect(newState.data[1].title).toBe("Hello")

})

it('new title should be "Im fine"', ()=>{

    let copyOfItem = [...state.data]
    copyOfItem.push(newData)

    let newState = dataReducer(state, createData(copyOfItem))

    expect(newState.data[1].body).toBe("Im fine")
})

