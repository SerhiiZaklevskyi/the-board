import { IActionType, ITaskReducerState } from './reducers'
import { Task } from '../constants/task.enum'

const INITIAL_STATE: ITaskReducerState = {
  headline: '',
  desription: '',
  status: '',
  mark: '',
  id: '',
}

export default (state: ITaskReducerState = INITIAL_STATE, { type, payload }: IActionType): ITaskReducerState => {
  if (typeof payload === 'function' && type === Task) {
    state = payload(state)
  }
  return state
}
