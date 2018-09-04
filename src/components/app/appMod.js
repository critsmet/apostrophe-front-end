//initial state
const initialState = {
  lastBodyPush: ''
}

//reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LAST_BODY_PUSH':
    return {
      lastBodyPush: action.paylod
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
