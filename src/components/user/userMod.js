//state

const initialState = {
  userDisplay: []
}

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DISPLAY':
      return {
        userDisplay: action.payload
      }
    default:
      return state;
    }
}

//actions

export const setUserDisplay = (id) => dispatch => {
  fetch('http://localhost:3000/api/v1/users/' + id)
  .then(resp => resp.json())
  .then(user => dispatch({
    type: 'SET_USER_DISPLAY',
    payload: [user.data]
  }))
}
