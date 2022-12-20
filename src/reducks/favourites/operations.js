import API from '../../API';
import { addFavouritesAction, deleteFavouritesAction, fetchFavouritesAction } from './action';

const api = new API();
const FAVOURITES_KEY = 'FAVOURITES_KEY';

export const fetchFromLocalStorage = () => {
    return async dispatch => {
        let favouritesJSON = localStorage.getItem(FAVOURITES_KEY);
        let favourites = [];
        if (favouritesJSON) {
            favourites = JSON.parse(favouritesJSON);
        }
        dispatch(fetchFavouritesAction(favourites));
    };
};

export const addFavourite = image => {
    return async (dispatch, getState) => {
        let prevFavourites = getState().favourites.list;
        const nextFavourites = [image, ...prevFavourites];
        setToLocalStorage(nextFavourites);
        dispatch(addFavouritesAction(nextFavourites));
    };
};

export const deleteFavourite = id => {
    return async (dispatch, getState) => {
        let prevFavourites = getState().favourites.list;
        const nextFavourites = prevFavourites.filter(image => image.id != id);
        setToLocalStorage(nextFavourites);
        dispatch(deleteFavouritesAction(nextFavourites));
    };
};

const setToLocalStorage = favourites => {
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
};
