const GET_DATA = 'GET_DATA';

const INITIAL_STATE = {
  animeData: [],
}

export const animeReducer = (state = INITIAL_STATE, { type, payload}) => {
  switch (type) {
    case GET_DATA:
      return { ...state, animeData: payload };
   default:
      return state;
  }
}
