export interface IActionType {
  type: string | number
  payload: <T>(state: T) => T
}

export interface ITaskReducerState {
  headline?: string
  desription: string
  status: string
  mark?: string
}

export interface IContentReducerState {
  tasks: Array<ITaskReducerState>
}
