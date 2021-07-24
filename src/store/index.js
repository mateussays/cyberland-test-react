import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { animeReducer } from "../reducer";

export const store = createStore(animeReducer, applyMiddleware(thunk));
