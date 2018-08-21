//initial state

const initialState = {
  pubs: []
}

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PUBLICATIONS':
      return {
        ...state,
        pubs: action.payload
      }
    default:
    return state;
  }
}

//actions

export const fetchPublications = () => dispatch => {
  console.log("fetching!");
  fetch('http://localhost:3000/api/v1/publications')
    .then(resp => resp.json())
    .then(pubs => dispatch({
      type: 'FETCH_PUBLICATIONS',
      payload: pubs.data
    })
  );
}
