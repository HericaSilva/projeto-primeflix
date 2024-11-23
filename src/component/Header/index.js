import { Link } from 'react-router-dom';
import './header.css';

function Header(){
    return(
        <header>
          <div className="header-container">
            <Link className="logo" to="/">Prime Flix</Link>   
          </div>
          
          <Link className="favoritos" to="/favoritos">My Favorites </Link>   
        </header>
    )
}
export default Header;