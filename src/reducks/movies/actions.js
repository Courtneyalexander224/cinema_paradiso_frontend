export const FETCH_MOVIES = 'FETCH_MOVIES';
export const fetchMoviesAction = movies => {
    return {
        type: 'FETCH_MOVIES',
        payload: { movies }
    };
};
