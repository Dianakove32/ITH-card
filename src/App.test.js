import  ReactDOM  from "react-dom";
import App from '../src/App'
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<App/>, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', ()=>{
    const tree = renderer
  .create(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
  })