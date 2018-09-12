//initial state

const initialState = {
  showDefault: true,
  pubs: [],
  showPubs: {pub: [], fillers: [], recs: [], users: []}
}

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PUBLICATIONS':
      return {
        ...state,
        pubs: action.payload
      }
    case 'SET_SHOW_PUBS':
      return {
        ...state,
        showPubs: {
          pub: [action.payload.pub],
          fillers: action.payload.fillers,
          recs: action.payload.recs,
          users: action.payload.users
        }
      }
    case 'CLEAR_PUBLICATIONS':
      return {
        ...state,
        pubs: [],
        showPubs: {pub: [], fillers: [], recs: [], users: []}
      }
    case 'HIDE_DEFAULT':
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
  fetch('https://apostrophe-back-end.herokuapp.com/api/v1/publications/search',
  {method: "POST",
     headers: {"Content-Type": "application/json", "Accept": "application/json"},
     body: JSON.stringify({terms})
    })
    .then(resp => resp.json())
    .then(pubs => dispatch({
      type: 'SET_PUBLICATIONS',
      payload: pubs.pubs
    })
  );
}

export const setShowPubs = (terms) => dispatch => {
  fetch('https://apostrophe-back-end.herokuapp.com/api/v1/publications/search',
  {method: "POST",
     headers: {"Content-Type": "application/json", "Accept": "application/json"},
     body: JSON.stringify({terms})
    })
    .then(resp => resp.json())
    .then(pubs => dispatch({
      type: 'SET_SHOW_PUBS',
      payload: pubs
    })
  );
}

export const clearPublications = () => {
  return {
    type: 'CLEAR_PUBLICATIONS'
  }
}
