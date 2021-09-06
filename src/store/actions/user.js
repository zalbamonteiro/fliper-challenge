export const CHANGE_USER = "CHANGE_USER"

export const changeUser = (currentUser) => ({
  type: CHANGE_USER,
  currentUser,
})
