//initial state
const initialState = {
  browseShown: false,
  filter: ''
}

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_BROWSE':
      return {
        ...state,
        browseShown: true
      }
    case 'HIDE_BROWSE':
      return {
        ...state,
        browseShown: false
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

export const showBrowse = () => {
  return {
    type: 'SHOW_BROWSE'
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
