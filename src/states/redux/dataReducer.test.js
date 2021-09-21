import { dataReducer } from "./dataReducer";
import { fetchData, toggleIsEdit } from "./actions";

test('thunk', async ()=>{
const thunk = fetchData()
const dispatchMock = jest.fn()
await thunk(dispatchMock)
expect(dispatchMock).toBeCalled()
})

test('isEdit true',()=>{
    const state ={
        data: [{
            title: "Spain",
            body:
            "Is a country in Southwestern Europe with some pockets of territory in the Mediterranean Sea, offshore in the Atlantic Ocean and across the Strait of Gibraltar.",
            id: 1,
        },
        {
            title: "Egypt",
            body:
            "Officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula.",
            id: 2,
        },],
        fetch_data:  [] ,
        isEdit: false,
        isLoad: false,
        isOpen: false
    }

    const newState = dataReducer(state, toggleIsEdit())
    expect(newState.isEdit).toBeTruthy()
})