//initial state

const initialState = {
  showSearch: false,
  search: ''
}

//reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SEARCH':
    return {
      ...state,
      showSearch: !state.showSearch
    }
    case 'UPDATE_SEARCH':
    return {
      ...state,
      search: action.payload
    }
    default:
    return state;
  }
}

//actions & creators

export const toggleSearch = () => {
  return {
    type: 'SHOW_SEARCH',
  }
}

export const updateSearch = (e) =>{
  return {
    type: 'UPDATE_SEARCH',
    payload: e.target.value
  }
}