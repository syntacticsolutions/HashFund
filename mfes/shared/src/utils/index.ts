import isEmpty from "lodash/isEmpty"
import { useEffect } from "react"
import { useAuthUser } from "../store/auth/hooks"

export const usePermsEffect = (perm, cb) => {
  const [user, loading] = useAuthUser()

  useEffect(() => {
    if (!isEmpty(user) && !loading) {
      console.log({ user })
      user
        .getIdTokenResult(true)
        .then((authUser) => {
          console.log({ authUser })
          if (!authUser?.claims?.perms?.includes(perm)) {
            cb()
            // TODO add toaster messages
          }
        })
        .catch((err) => {
          cb()
        })
    }
    }, [user]) // eslint-disable-line
}
