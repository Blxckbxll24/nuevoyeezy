import React, { useEffect, useState } from 'react';
import '../styles/buscador.css';
import { Link } from 'react-router-dom';

const CLIENT_ID = "453d6c17658a4a4a8498f17cb1b22b75";
const CLIENT_SECRET = "6d243006672b46cea52da45f4fa7b0f7";
const sinFotoImage = require('../images/sinimagen.png');

function Buscador() {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [results, setResults] = useState({});
    const [genres, setGenres] = useState([]);
    const [showGenres, setShowGenres] = useState(true);
    const [showResults, setShowResults] = useState(false); // Nuevo estado

    useEffect(() => {
        // Recuperar géneros desde el almacenamiento local
        const storedGenres = localStorage.getItem('storedGenres');
        if (storedGenres) {
            setGenres(JSON.parse(storedGenres));
        } else {
            getGenres();
        }
    }, []);

    const getGenres = () => {
        if (!accessToken) {
            return;
        }

        var genreParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };

        fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', genreParameters)
            .then(response => response.json())
            .then(data => {
                setGenres(data.genres);
                // Almacenar géneros en el almacenamiento local
                localStorage.setItem('storedGenres', JSON.stringify(data.genres));
                // Mostrar los géneros al cargar
                setShowGenres(true);
            });
    }

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        };
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token));
    }, []);

    useEffect(() => {
        search();
    }, [searchInput, accessToken]);

    async function search() {
        if (!accessToken || searchInput.trim() === "") {
            setResults({});
            setShowResults(false); // Ocultar resultados cuando no hay búsqueda
            setShowGenres(true); // Mostrar géneros en lugar de resultados
            return;
        }

        setShowResults(true); // Mostrar resultados cuando se realiza una búsqueda
        setShowGenres(false); // Ocultar géneros

        // Resto del código de búsqueda
        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };

        var artistsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => data.artists.items);

        var songsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', searchParameters)
            .then(response => response.json())
            .then(data => data.tracks.items);
            console.log(response.json)

        var albumsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album', searchParameters)
            .then(response => response.json())
            .then(data => data.albums.items);
            

        var playlistsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=playlist', searchParameters)
            .then(response => response.json())
            .then(data => data.playlists.items);

        setResults({ artists: artistsData, songs: songsData, albums: albumsData, playlists: playlistsData });
    }

    return (
        <div className="main-container">
            <aside className='asi'>
                <div className="menu">
                    <Link className="active" to="/inicio"><span><img src={require('../images/home.svg')} alt="" /></span>Inicio</Link>
                    <Link to=''><span><img src={require('../images/search.svg')} alt="" /></span>Buscar</Link>
                    <Link to="#"><span><img src={require('../images/library.svg')} alt="" /></span>Tu biblioteca</Link> <br />
                    <Link to="#"><span><img src={require('../images/add.svg')} alt="" /></span>Crear lista</Link>
                    <Link to="#"><span><img src={require('../images/heart.svg')} alt="" /></span>Canciones que te gustan</Link>
                </div>
            </aside>
            <div className="center-container">
                <div className="search-container">
                    <section class="middle-section">
                        <Link to='/inicio'><span><img className='icon' src={require('../images/simbolo-menor-que.jpeg')} alt="" placeholder='volver' title='Volver'/></span></Link>
                        <Link to=''><span><img className='icon' src={require('../images/mayor-que-el-simbolo.jpeg')} alt="" placeholder='Avanzar' title='Avanzar'/></span></Link>        
                        <input type="input" className="search-input" placeholder='¿Qué gustas escuchar?' value={searchInput} onChange={event => setSearchInput(event.target.value)} />
                    </section>
                </div>

        
                <div className="results-container">
                {showGenres && genres.map((genre, index) => (
                    <div className="result-card" key={index}>
                        <p className="result-title">{genre}</p>
                    </div>
                ))}
                {showResults && ( // Mostrar resultados si showResults es verdadero
                    <div className="result-section">
                        <div className="result-row">
                            <h2>Artists</h2>
                            {results.artists && results.artists.map((result, i) => (
                                <div className="result-card" key={i}>
                                    <img
                                        className="result-image"
                                        src={result.images?.[0]?.url || sinFotoImage}
                                        alt={result.name}
                                    />
                                    <p className="result-title">{result.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className="result-row">
                            <h2>Songs</h2>
                            {results.songs && results.songs.map((result, i) => (
                                <div className="result-card" key={i}>
                                    <img
                                        className="result-image"
                                        src={result.album?.images?.[0]?.url || sinFotoImage}
                                        alt={result.name}
                                    />
                                    <p className="result-title">{result.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className="result-row">
                            <h2>Albums</h2>
                            {results.albums && results.albums.map((result, i) => (
                                <div className="result-card" key={i}>
                                    <img
                                        className="result-image"
                                        src={result.images?.[0]?.url || sinFotoImage}
                                        alt={result.name}
                                    />
                                    <p className="result-title">{result.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className="result-row">
                            <h2>Playlists</h2>
                            {results.playlists && results.playlists.map((result, i) => (
                                <div className="result-card" key={i}>
                                    <img
                                        className="result-image"
                                        src={result.images?.[0]?.url || sinFotoImage}
                                        alt={result.name}
                                    />
                                    <p className="result-title">{result.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}

export default Buscador;