import { IActionType, IContentReducerState } from './reducers'
import { Content } from '../constants/task.enum'

const INITIAL_STATE: IContentReducerState = {
  backlog: [
    {
      headline: 'backlog',
      desription: 'backlog',
      status: 'backlog',
      mark: 'backlog',
      id: '1',
    },
  ],
  selected: [],
  running: [
    {
      headline: 'running',
      desription: 'running',
      status: 'running',
      mark: 'running',
      id: '2',
    },
  ],
  evaluating: [],
  live: [],
}

export default (state: IContentReducerState = INITIAL_STATE, { type, payload }: IActionType): IContentReducerState => {
  if (typeof payload === 'function' && type === Content) {
    state = payload(state)
  }
  return state
}
