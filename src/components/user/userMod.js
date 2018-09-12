//initial state

const initialState = {
  userDisplay: [],
  editFormShown: false
}

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DISPLAY':
      return {
        userDisplay: action.payload
      }
    case 'CLEAR_USER_DISPLAY':
      return {
        userDisplay: []
      }
    case 'SHOW_EDIT_USER':
      return {
        ...state,
        editFormShown: true
      }
    case 'HIDE_EDIT_USER':
      return {
        ...state,
        editFormShown: false
      }
    default:
      return state;
    }
}

//actions

export const setUserDisplay = (id) => dispatch => {
  fetch('https://apostrophe-back-end.herokuapp.com/api/v1/users/' + id)
  .then(resp => resp.json())
  .then(user => dispatch({
    type: 'SET_USER_DISPLAY',
    payload: [user.data]
  }))
}

export const editUserDescription = (inputs) => dispatch => {
  fetch('https://apostrophe-back-end.herokuapp.com/api/v1/users/edit/',
  {method: 'POST',
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({inputs})
  })
  .then(resp => resp.json())
  .then(user => dispatch({
    type: 'SET_USER_DISPLAY',
    payload: [user.data]
  })
  )
  dispatch({type: 'HIDE_EDIT_USER'})
}

export const editUserPhoto = (file, id) => dispatch => {
  const imageData = new FormData()

  imageData.append("image_file", file[0])
  imageData.append("user_id", id)

  fetch('https://apostrophe-back-end.herokuapp.com/api/v1/users/photo',
  {method: 'POST',
  body: imageData
  })
  .then(resp => resp.json())
  .then(user => dispatch({
    type: 'SET_USER_DISPLAY',
    payload: [user.data]
  })
  )
}

export const clearUserDisplay = () => {
  return {
    type: 'CLEAR_USER_DISPLAY'
  }
}

export const showEditUser = () => {
  return {
    type: 'SHOW_EDIT_USER'
  }
}

export const hideEditUser = () => {
  return {
    type: 'HIDE_EDIT_USER'
  }
}
