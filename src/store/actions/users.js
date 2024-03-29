export const REQUEST_USERS = "REQUEST_USERS"
export const REQUEST_USERS_SUCCESS = "REQUEST_USERS_SUCCESS"
export const REQUEST_USERS_ERROR = "REQUEST_USERS_SUCCESS"

export const getUsers = () => ({
  type: "REQUEST_USERS",
})

export const getUsersdSuccess = (users) => ({
  type: REQUEST_USERS_SUCCESS,
  users,
})

export const getUsersError = () => ({
  type: REQUEST_USERS_ERROR,
})
