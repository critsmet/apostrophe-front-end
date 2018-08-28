//initial state

const initialState = {
  showBrowse: false,
  filter: ''
}

//reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BROWSE':
    return {
      ...state,
      showBrowse: !state.showBrowse
    }
    case 'UPDATE_FILTER':
    return {
      ...state,
      filter: action.payload
  }
    default:
    return state;
  }
}

//action creators

export const toggleBrowse = () => {
  return {
    type: 'TOGGLE_BROWSE'
  }
}

export const updateFilter = (id) => {
  return {
    type: 'UPDATE_FILTER',
    payload: id
  }
}
