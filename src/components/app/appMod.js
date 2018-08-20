//initial state

const initialState = {
  showBrowse: false,
  pubs: []
}

//reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BROWSE':
    return {
      ...state,
      showBrowse: !state.showBrowse
    }
    case 'FETCH_PUBLICATIONS':
      return {
        ...state,
        pubs: action.payload
      }
    default:
    return state;
  }
}

//actions & creators

export const toggleBrowse = () => {
  return {
    type: 'TOGGLE_BROWSE'
  }
}

export const fetchPublications = () => dispatch => {
  console.log("fetching!");
  fetch('http://localhost:3000/api/v1/publications')
    .then(resp => resp.json())
    .then(pubs => dispatch({
      type: 'FETCH_PUBLICATIONS',
      payload: pubs
    })
  );
}
