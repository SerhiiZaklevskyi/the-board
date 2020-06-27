export interface IActionType {
  type: string | number
  payload: <T>(state: T) => T
}

export interface ITaskReducerState {
  headline?: string | nnull
  desription?: string | null
  status: string | null
  mark?: string | null
  id: string
}

export interface IContentReducerState {
  tasks: Array<ITaskReducerState>
}
