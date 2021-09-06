import { combineReducers } from "redux"
import { summaryReducer } from "./summary"
import { usersReducer } from "./users"
import { userReducer } from "./user"

export const Reducers = combineReducers({
  summaryReducer,
  usersReducer,
  userReducer,
})
