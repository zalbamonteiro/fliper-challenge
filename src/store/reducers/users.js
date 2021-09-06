import {
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_ERROR,
  REQUEST_USERS,
} from "../actions"

const initialState = {
  users: {},
  error: false,
  isLoading: false,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        isLoading: false,
      }
    case REQUEST_USERS_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    default:
      return state
  }
}
