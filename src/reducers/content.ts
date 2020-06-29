import { IActionType, IContentReducerState } from './reducers'
import { Content } from '../constants/task.enum'

const INITIAL_STATE: IContentReducerState = {
  tasks: [
    {
      headline: 'Mind mapping ing education video and learn some other stuff',
      description: 'Experiement with the value of marketing contect articles marketing contect articles',
      status: 'Backlog',
      mark: 'Marketing',
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
