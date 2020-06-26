import { IActionType, IContentReducerState } from './reducers'
import { Content } from '../constants/task.enum'

const INITIAL_STATE: IContentReducerState = {
  tasks: [
    {
      headline: 'backlog',
      desription: 'backlog',
      status: 'backlog',
      mark: 'backlog',
    },
    {
      headline: 'running',
      desription: 'running',
      status: 'running',
      mark: 'running',
    },
  ],
}

export default (state: IContentReducerState = INITIAL_STATE, { type, payload }: IActionType): IContentReducerState => {
  if (typeof payload === 'function' && type === Content) {
    state = payload(state)
  }
  return state
}
