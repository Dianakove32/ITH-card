import  ReactDOM   from "react-dom";
import Cards from '../Cards'
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "../../../states/redux/rootReducer";
import thunk from "redux-thunk";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'

const store  = createStore(rootReducer, compose(applyMiddleware(thunk)))

it('renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Provider store={store} ><Cards /></Provider></BrowserRouter> , div)
})

it('renders mainPage link', ()=>{
    render(<BrowserRouter><Provider store={store} ><Cards /></Provider></BrowserRouter>)
  const linkEl = screen.getByText(/MainPage/i)
  expect(linkEl).toBeInTheDocument()
})

