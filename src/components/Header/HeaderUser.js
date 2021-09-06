import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeUser } from "../../store/actions"
import { useAllUsers } from "./HeaderUser.hooks"

export const HeaderUser = () => {
  const dispatch = useDispatch()
  const [selectedUser, setSelectedUser] = useState()
  const [users, getAllUsersSummary] = useAllUsers(setSelectedUser)

  const handleChange = (e) => {
    setSelectedUser({ id: e.target.value })
  }

  useEffect(() => {
    getAllUsersSummary()
  }, [])

  useEffect(() => {
    if (selectedUser) {
      dispatch(changeUser(selectedUser))
    }
  }, [selectedUser, dispatch])

  return (
    <div className="header__user">
      {users.length > 0 && (
        <select onBlur={handleChange} onChange={handleChange}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              Usuário : {user.id}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
