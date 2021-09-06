import { CHANGE_USER } from "../actions"

const initialState = {
  currentUser: { id: 0 },
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return {
        currentUser: action.currentUser,
      }
    default:
      return state
  }
}
