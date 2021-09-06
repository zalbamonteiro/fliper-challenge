import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSummaryById } from "../../store/thunks/summary"

function useResume() {
  const dispatch = useDispatch()
  const [summary, setSummary] = useState({
    isLoading: true,
    error: false,
    summary: {},
  })

  const result = useSelector((state) => state.summaryReducer)

  const getSummary = (curentUserId) => dispatch(fetchSummaryById(curentUserId))

  useEffect(() => {
    setSummary(result)
  }, [result])

  return [summary, getSummary]
}

export { useResume }
