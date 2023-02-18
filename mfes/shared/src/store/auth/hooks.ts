import { useEffect } from "react"
import { Dispatch } from "redux"
import { useSelector, useDispatch } from "react-redux"
import { State } from "./types"
import { getUser } from "./actions"
export * from "../../utils"

type AuthState = {
  authReducer: State
}

type User = any

export const useAuthUser = (): [User, boolean] => {
  const { user, userLoading } = useSelector((state: AuthState) => state.authReducer)

  const dispatch = useDispatch<Dispatch<any>>()

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return [user, userLoading]
}
