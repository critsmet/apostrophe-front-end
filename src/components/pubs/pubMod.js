//initial state

const initialState = {
  showDefault: true,
  pubs: []
}

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PUBLICATIONS':
      return {
        ...state,
        pubs: action.payload
      }
    case 'HIDE_DEFAULT':
    console.log("hi")
      return {
        ...state,
        showDefault: false
      }
    case 'SHOW_DEFAULT':
      return {
        ...state,
        showDefault: true
      }
    default:
    return state;
  }
}

//actions

export const hideDefault = () => {
  return {
    type: 'HIDE_DEFAULT'
  }
}

export const showDefault = () => {
  return {
    type: 'SHOW_DEFAULT'
  }
}

export const setPublications = (terms) => dispatch => {
  fetch('http://localhost:3000/api/v1/publications/search',
  {method: "POST",
     headers: {"Content-Type": "application/json", "Accept": "application/json"},
     body: JSON.stringify({terms})
    })
    .then(resp => resp.json())
    .then(pubs => dispatch({
      type: 'SET_PUBLICATIONS',
      payload: pubs.data
    })
  );
}
