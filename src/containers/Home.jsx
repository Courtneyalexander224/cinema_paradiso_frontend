import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import IconLeft from '../assets/img/icon-left.svg';
import IconRight from '../assets/img/icon-right.svg';
import { getMovies } from '../reducks/movies/selectors';
import API from '../API';
import MainImage from '../components/Common/MainImage';
import { getFavourites } from '../reducks/favourites/selectors';
import { addFavourite, fetchFromLocalStorage } from '../reducks/favourites/operations';
import Preview from '../components/Common/Preview';
import { useDispatch } from 'react-redux';
import IconFav from '../assets/img/icon-fav.png';

const api = new API();
const Home = () => {
    const [moviesComingSoon, setMoviesCommingSoon] = useState(null);
    const [moviesNewReleased, setMoviesNewReleased] = useState(null);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const movies = getMovies(selector);
    const favourites = getFavourites(selector);
    const clickfav = movie => {
        dispatch(addFavourite(movie));
    };
    const clickMovie = movieId => {
        setSelectedMovieId(movieId);
        setShowPreview(true);
    };
    
    useEffect(() => {
        dispatch(fetchFromLocalStorage);
        api.getMovies({ release_type: 'Coming Soon' })
            .then(movies => {
                setMoviesCommingSoon(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ release_type: 'Newly Released' })
            .then(movies => {
                setMoviesNewReleased(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    }, [movies]);

    return (
        <>
            {showPreview && <Preview setShowPreview={setShowPreview} selectedMovieId={selectedMovieId} />}
            <section>
                <MainImage />
                <div class="list">
                    <div class="left">
                        <div class="newly-rel">
                            <hr />
                            <h2>Newly Released</h2>
                            <hr />
                        </div>
                    </div>
                    <ul>
                        {moviesNewReleased && moviesNewReleased.results.length > 0 ? (
                            moviesNewReleased.results.map(movie => (
                                <li>
                                    <div class="card">
                                        {movie &&
                                            Object.values(favourites).filter(
                                                favoriteMovie => movie.id == favoriteMovie.id
                                            ).length === 0 && (
                                                <img
                                                    class="fav"
                                                    onClick={() => {
                                                        clickfav(movie);
                                                    }}
                                                    src={IconFav}
                                                    alt=""
                                                />
                                            )}
                                        <img
                                            onClick={() => clickMovie(movie.id)}
                                            class="image"
                                            src={'https://res.cloudinary.com/dwzjr9dg5/' + movie.image_mobile}
                                            alt=""
                                        />
                                    </div>
                                    <h1>{movie.name}</h1>
                                    <p>TV-MA | Action, Crime</p>
                                    <a href={movie.trailer_link} target="_blank"><button>Watch Trailer</button></a>

                                </li>
                            ))
                        ) : (
                            <p>No movies here yet...</p>
                        )}
                    </ul>
                </div>

                <div class="list">
                    <div class="left">
                        <div class="newly-rel">
                            <hr />
                            <h2>Upcoming Movies</h2>
                            <hr />
                        </div>
                    </div>
                    <ul>
                        {moviesComingSoon && moviesComingSoon.results.length > 0 ? (
                            moviesComingSoon.results.map(movie => (
                                <li>
                                    <div class="card">
                                        {movie &&
                                            favourites &&
                                            Object.values(favourites).filter(
                                                favoriteMovie => movie.id == favoriteMovie.id
                                            ).length === 0 && (
                                                <img
                                                    class="fav"
                                                    onClick={() => {
                                                        clickfav(movie);
                                                    }}
                                                    src={IconFav}
                                                    alt=""
                                                />
                                            )}
                                        <img
                                            onClick={() => clickMovie(movie.id)}
                                            class="image"
                                            src={'https://res.cloudinary.com/dwzjr9dg5/' + movie.image_mobile}
                                            alt=""
                                        />
                                    </div>
                                    <h1>{movie.name}</h1>
                                    <p>TV-MA | Action, Crime</p>
                                    <a href={movie.trailer_link} target="_blank"><button>Watch Trailer</button></a>

                                </li>
                            ))
                        ) : (
                            <p>No movies here yet...</p>
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;
