//initial state

const initialState = {
  showBrowse: false,
  filter: 'all'
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

//actions & creators

export const toggleBrowse = () => {
  return {
    type: 'TOGGLE_BROWSE'
  }
}

export const updateFilter = (e) => {
  return {
    type: 'UPDATE_FILTER',
    payload: e.target.id
  }
}
