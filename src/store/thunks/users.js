import { getUsers, getUsersdSuccess, getUsersError } from "../actions"

import { fetchAllUsersSummary } from "../../services"

export const fetchAllUsers = () => async (dispatch) => {
  dispatch(getUsers())

  await fetchAllUsersSummary()
    .then((response) => {
      const { data } = response
      return dispatch(getUsersdSuccess(data.wealthSummary))
    })
    .catch(() => dispatch(getUsersError()))
}
