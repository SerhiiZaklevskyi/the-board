import { IContentReducerState, ITaskReducerState } from '../reducers/reducers'
import { Content } from '../constants/task.enum'
import HTTP from '../common/api'
import { toast } from 'react-toastify'

const TASK_ENDPOINT: string = 'mybox_6d9e326c183faddwac18s'

export const updateTask = (task: ITaskReducerState, index: any) => async (dispatch: any) => {
  try {
    await HTTP.put(`${TASK_ENDPOINT}/${task._id}`, task)

    dispatch({
      type: Content,
      payload: (state: IContentReducerState) => ({
        ...state,
        tasks: [...state.tasks.slice(0, index), task, ...state.tasks.slice(index + 1)],
      }),
    })
  } catch (error) {
    toast(JSON.stringify(error.data.message))
  }
}

export const createTask = (task: ITaskReducerState) => async (dispatch: any) => {
  try {
    const response = await HTTP.post(`${TASK_ENDPOINT}/tasks`, task)

    dispatch({
      type: Content,
      payload: (state: IContentReducerState) => ({
        ...state,
        tasks: [...state.tasks, response],
      }),
    })
  } catch (error) {
    toast(JSON.stringify(error.data.message))
  }
}

export const removeTask = (task: ITaskReducerState) => async (dispatch: any) => {
  try {
    await HTTP.delete(`${TASK_ENDPOINT}/${task._id}`)

    dispatch({
      type: Content,
      payload: (state: IContentReducerState) => ({
        ...state,
        tasks: [...state.tasks.filter((item) => item !== task)],
      }),
    })
  } catch (error) {
    toast(JSON.stringify(error.data.message))
  }
}

export const getAllTasks = () => async (dispatch: any) => {
  const tracks = await HTTP.get(`${TASK_ENDPOINT}/tasks`)

  dispatch({
    type: Content,
    payload: (state: IContentReducerState) => ({
      ...state,
      tasks: tracks,
    }),
  })
}
