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
    case 'HIDE_BROWSE':
    return {
      ...state,
      showBrowse: false
    }
    case 'UPDATE_FILTER':
    return {
      ...state,
      filter: action.payload
    }
    case 'RESET_FILTER':
    return {
      ...state,
      filter: ''
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

export const hideBrowse = () => {
  return {
    type: 'HIDE_BROWSE'
  }
}

export const resetFilter = () => {
  return {
    type: 'RESET_FILTER'
  }
}

export const updateFilter = (id) => {
  return {
    type: 'UPDATE_FILTER',
    payload: id
  }
}
