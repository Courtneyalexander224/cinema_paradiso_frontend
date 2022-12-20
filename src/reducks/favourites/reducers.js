import * as Actions from './action';
import initialState from '../store/initialState';

export const FavouritesReducer = (state = initialState.favourites, action) => {
    switch (action.type) {
        case Actions.ADD_FAVOURITES:
            return {
                ...state,
                list: action.payload
            };
        case Actions.FETCH_FAVOURITES:
            return {
                ...state,
                list: action.payload
            };
        case Actions.DELETE_FAVOURITES:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};
