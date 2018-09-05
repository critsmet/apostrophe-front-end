//initial state
const initialState = {
  user: null,
  lastBodyPush: ''
}

//reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LAST_BODY_PUSH':
      return {
        ...state,
        lastBodyPush: action.paylod
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

//action creators

export const changeLastBodyPush = (dir) => {
  return {
    type: 'CHANGE_LAST_BODY_PUSH',
    paylod: dir
  }
}

export const setUser = (inputs) => dispatch => {
  fetch('http://localhost:3000/api/v1/users/',
  {method: 'POST',
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({inputs})
  })
  .then(resp => resp.json())
  .then(user => dispatch({
    type: 'SET_USER',
    payload: user.data
  })
 )
}
