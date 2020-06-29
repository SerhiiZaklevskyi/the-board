import { IContentReducerState } from '../reducers/reducers'
import { Content } from '../constants/task.enum'

export const addTask = (task: any) => ({
  type: Content,
  payload: (state: IContentReducerState) => ({
    ...state,
    tasks: [...state.tasks, task],
  }),
})

export const updateTask = (task: any, index: any) => ({
  type: Content,
  payload: (state: IContentReducerState) => ({
    ...state,
    tasks: [...state.tasks.slice(0, index), task, ...state.tasks.slice(index + 1)],
  }),
})
