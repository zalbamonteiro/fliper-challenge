import {
  getSummaryById,
  getSummaryByIdSuccess,
  getSummaryByIdError,
} from "../actions"

import { fetchSummary } from "../../services"

export const fetchSummaryById = (clientId) => async (dispatch) => {
  dispatch(getSummaryById())

  await fetchSummary(clientId)
    .then((response) => {
      const { data } = response
      return dispatch(getSummaryByIdSuccess(data.wealthSummary_by_pk))
    })
    .catch(() => dispatch(getSummaryByIdError()))
}
