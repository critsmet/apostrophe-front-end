//initial state

const initialState = {
  userFormShown: false,
  showEditForm: false,
  form: null
}

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_USER_FORM':
      return {
        ...state,
        userFormShown: true
      }
    case 'HIDE_USER_FORM':
      return {
        ...state,
        userFormShown: false
      }
    case 'SET_FORM':
      return {
        ...state,
        form: action.payload
      }
    case 'SHOW_EDIT_USER':
      return {
        ...state,
        showEditForm: true
      }
    case 'HIDE_EDIT_USER':
      return {
        ...state,
        showEditForm: false
      }
    default:
      return state;
    }
}

//actions

export const showUserForm = () => {
  return {
    type: 'SHOW_USER_FORM'
  }
}

export const hideUserForm = () => {
  return {
    type: 'HIDE_USER_FORM'
  }
}

export const setForm = (form) => {
  return {
    type: 'SET_FORM',
    payload: form
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
