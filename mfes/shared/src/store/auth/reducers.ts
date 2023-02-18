import { ActionTypes, Action, State } from "./types"

const initialState: State = {
  user: {} as any,
  userLoading: true
}

export default function auth(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case ActionTypes.SET_USER_LOADING:
      return {
        ...state,
        userLoading: action.payload
      }
    default:
      return state
  }
}
