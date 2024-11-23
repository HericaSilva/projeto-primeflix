import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';


function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "059620c36412127502e69236a0f36178",
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);
        }
        loadFilmes();

    }, []);

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading movies...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Movies Theaters </h1>

            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Access</Link>
                        </article>
                    )
                })}
            </div>

        </div >
    )
}
export default Home;