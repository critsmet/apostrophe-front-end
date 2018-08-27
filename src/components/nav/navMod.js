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
    console.log(action.payload)
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

export const updateSearch = (search) =>{
  return {
    type: 'UPDATE_SEARCH',
    payload: search
  }
}
