
import { ActionTypes } from "./types"

const _setUser = (user: any) => ({
  type: ActionTypes.SET_USER,
  payload: user
})

const _setLoading = (loading: boolean) => ({
  type: ActionTypes.SET_USER_LOADING,
  payload: loading
})

export function getUser() {
  return (dispatch) => {
    dispatch(_setLoading(true))
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     dispatch(_setUser(user))
    //     user.getIdTokenResult(true).then(function ({ token }) {
    //       localStorage.setItem("token", `Bearer ${token}`)
    //     })
    //   } else {
    //     dispatch(_setUser({} as firebase.User))
    //   }
      dispatch(_setLoading(false))
    // })
  }
}
