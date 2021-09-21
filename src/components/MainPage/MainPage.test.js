import MainPage from "./MainPage";
import { BrowserRouter } from "react-router-dom";
import * as renderer from 'react-test-renderer';
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

it('matches snapshot', ()=>{
    const tree = renderer
  .create(
    <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
  )
  .toJSON();
 expect(tree).toMatchSnapshot();
 })

 test('renders CardsList link', ()=>{
    render(<BrowserRouter>
      <MainPage/>
    </BrowserRouter> )
    const linkEl = screen.getByText( 'CardsList' )
    expect(linkEl).toBeInTheDocument()
  })

