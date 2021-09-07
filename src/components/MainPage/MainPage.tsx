import { Link } from "react-router-dom";
import './MainPage.scss'

const MainPage = () => {
    return (
        <div className="main-container">
            <Link to="/cards" className='link'>CardsList</Link>
        </div>
    );
};

export default MainPage;
