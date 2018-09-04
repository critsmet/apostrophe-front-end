//initial state

const initialState = {
  UserFormShown: false,
  form: null
}

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_USER_FORM':
      return {
        ...state,
        UserFormShown: true
      }
    case 'HIDE_USER_FORM':
      return {
        ...state,
        UserFormShown: false
      }
    case 'SET_LOGIN':
      return{
        ...state,
        form: 'login'
      }
    case 'SET_FORM':
      return {
        ...state,
        form: action.payload
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
    type: 'setForm',
    payload: form
  }
}
