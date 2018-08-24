//initial state

const initialState = {
  showBrowse: false,
  filters: [
    ["art-&-design", false],
    ["creative-writing-&-poetry", false],
    ["culture-&-lifestyle", false],
    ["gender-&-sexuality", false],
    ["science-&-technology", false],
    ["society-&-capitalism", false]
  ]
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
    let index = action.payload
    let updated = [...state.filters]
    updated[index][1] = !state.filters[index][1]
    return {
      ...state,
      filters: updated
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
    payload: e.target.dataset.index
  }
}
