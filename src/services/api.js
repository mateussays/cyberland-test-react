export const getData =  async (dispatch) => {
  const fetchUrl = await fetch("https://kitsu.io/api/edge/anime?page[10]=5&page[10]=0", {
    "method": "GET",
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json',
  }
  });
  const response = await fetchUrl.json();
  return dispatch({ type: 'GET_DATA', payload: response.data });
};
