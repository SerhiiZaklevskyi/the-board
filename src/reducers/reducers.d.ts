export interface IActionType {
  type: string | number
  payload: <T>(state: T) => T
}

export interface ITaskReducerState {
  headline?: string
  desription?: string
  status: string
  mark?: string
  id: string
}

export interface IContentReducerState {
  backlog: Array<ITaskReducerState>
  selected: Array<ITaskReducerState>
  running: Array<ITaskReducerState>
  evaluating: Array<ITaskReducerState>
  live: Array<ITaskReducerState>
}
