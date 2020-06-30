export interface IActionType {
  type: string | number
  payload: <T>(state: T) => T
}

export interface ITaskReducerState {
  headline?: string
  description?: string
  status: string
  mark?: string
  _id?: string
}

export interface IContentReducerState {
  tasks: Array<ITaskReducerState>
}
