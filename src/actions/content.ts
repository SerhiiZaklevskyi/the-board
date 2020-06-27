import { IContentReducerState } from '../reducers/reducers'
import { Content } from '../constants/task.enum'

export const addTask = (task: any) => ({
  type: Content,
  payload: (state: IContentReducerState) => ({
    ...state,
    tasks: [...state.tasks, task],
  }),
})