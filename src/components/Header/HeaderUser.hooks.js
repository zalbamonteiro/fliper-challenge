import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllUsers } from "../../store/thunks"

function useAllUsers(setSelectedUser) {
  const dispatch = useDispatch()
  const [users, setUsers] = useState([])
  const result = useSelector((state) => state.usersReducer)

  const getAllUsersSummary = () => dispatch(fetchAllUsers())

  useEffect(() => {
    if (!result.isLoading && result.users) {
      setUsers(result.users)
      setSelectedUser(result.users[0])
    }
  }, [result])

  return [users, getAllUsersSummary]
}

export { useAllUsers }
