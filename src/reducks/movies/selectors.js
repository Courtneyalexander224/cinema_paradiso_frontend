import { createSelector } from 'reselect';

const moviesSelector = state => state;

export const getMovies = createSelector([moviesSelector], state => state);
