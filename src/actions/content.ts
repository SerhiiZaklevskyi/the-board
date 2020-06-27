import { IActionType, IContentReducerState, ITaskReducerState } from '../reducers/reducers'
import { Content } from '../constants/task.enum'

export const addTask = (task: ITaskReducerState) => ({
  type: Content,
  payload: (state: IContentReducerState) => ({
    ...state,
    tasks: [...state.tasks, task],
  }),
})
