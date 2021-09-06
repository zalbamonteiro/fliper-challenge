import {
  REQUEST_SUMMARY,
  REQUEST_SUMMARY_SUCCESS,
  REQUEST_SUMMARY_ERROR,
} from "../actions"

const initialState = {
  summary: {},
  error: false,
  isLoading: true,
}

export const summaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SUMMARY:
      return {
        ...state,
      }
    case REQUEST_SUMMARY_SUCCESS:
      return {
        ...state,
        summary: action.summary,
        isLoading: false,
      }
    case REQUEST_SUMMARY_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    default:
      return state
  }
}
