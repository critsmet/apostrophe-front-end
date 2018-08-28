//initial state

const initialState = {
  search: ''
}

//reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
    return {
      ...state,
      search: action.payload
    }
    default:
    return state;
  }
}

//action creators

export const updateSearch = (search) =>{
  return {
    type: 'UPDATE_SEARCH',
    payload: search
  }
}
