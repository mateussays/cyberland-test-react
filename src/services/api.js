export const getData =  async (dispatch) => {
  dispatch({ type: 'GET_DATA'});
  const fetchUrl = await fetch('https://ghibliapi.herokuapp.com/films/');
  const response = await fetchUrl.json();
  return dispatch({ type: 'GET_DATA', payload: response });
};
