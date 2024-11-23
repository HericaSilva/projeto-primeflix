import { Link } from 'react-router-dom';
import './erro.css';

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Page not found</h2>
            
            <Link to="/">See all movies!</Link> 
        </div>
    )
}
export default Erro;