import { IActionType, IContentReducerState } from './reducers'
import { Content } from '../constants/task.enum'

const INITIAL_STATE: IContentReducerState = {
  tasks: [],
}

export default (state: IContentReducerState = INITIAL_STATE, { type, payload }: IActionType): IContentReducerState => {
  if (typeof payload === 'function' && type === Content) {
    state = payload(state)
  }
  return state
}
