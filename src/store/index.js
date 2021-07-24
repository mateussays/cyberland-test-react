import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { animeReducer } from "../reducer";

export const store = createStore(animeReducer, composeWithDevTools(applyMiddleware(thunk)));
