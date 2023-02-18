import { getUser } from "./actions"
import { useAuthUser, usePermsEffect } from "./hooks"
import authReducer from "./reducers"

export default {
  getUser,
  useAuthUser,
  authReducer,
  usePermsEffect
}
