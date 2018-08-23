//initial state

const initialState = {
  showBrowse: false,
}

//reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BROWSE':
    console.log(!state.showBrowse)
    return {
      ...state,
      showBrowse: !state.showBrowse
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
