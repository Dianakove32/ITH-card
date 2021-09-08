import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './components/Card/Cards';
import NotFoundPage from './components/Card/NotFoundPage/NotFoundPage';
import MainPage from './components/MainPage/MainPage';

function App() {
    return (
        <BrowserRouter>
            <div className = "App">
                <Switch>
                    <Route exact path = '/' component = {MainPage} />
                    <Route path = '/main' component = {MainPage} />
                    <Route path = '/cards' component = {Cards} />
                    <Route path = '*' component = {NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;