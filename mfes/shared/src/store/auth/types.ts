type User = any

export enum ActionTypes {
    SET_USER= 'SET_USER',
    SET_USER_LOADING = 'SET_USER_LOADING'
}

export type Action = {
    payload: User,
    type: ActionTypes
}

export type State = {
    user: User,
    userLoading: boolean,
}