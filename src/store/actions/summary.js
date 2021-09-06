export const REQUEST_SUMMARY = "REQUEST_SUMMARY"
export const REQUEST_SUMMARY_SUCCESS = "REQUEST_SUMMARY_SUCCESS"
export const REQUEST_SUMMARY_ERROR = "REQUEST_SUMMARY_SUCCESS"

export const getSummaryById = () => ({
  type: REQUEST_SUMMARY,
})

export const getSummaryByIdSuccess = (summary) => ({
  type: REQUEST_SUMMARY_SUCCESS,
  summary,
})

export const getSummaryByIdError = () => ({
  type: REQUEST_SUMMARY_ERROR,
})
