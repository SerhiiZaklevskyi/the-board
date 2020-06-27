import { IActionType, IContentReducerState } from './reducers'
import { Content } from '../constants/task.enum'

const INITIAL_STATE: IContentReducerState = {
  tasks: [
    {
      headline: 'Backlog',
      desription: 'Backlog',
      status: 'Backlog',
      mark: 'Backlog',
      id: '1',
    },
  ],
}

export default (state: IContentReducerState = INITIAL_STATE, { type, payload }: IActionType): IContentReducerState => {
  if (typeof payload === 'function' && type === Content) {
    state = payload(state)
  }
  return state
}
