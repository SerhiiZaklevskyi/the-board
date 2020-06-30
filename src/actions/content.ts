import { IContentReducerState } from '../reducers/reducers'
import { Content } from '../constants/task.enum'
import HTTP from '../common/api'

const TASK_ENDPOINT: string = 'mybox_6d9e326c183faddwac18s'

export const updateTask = (task: any, index: any) => async (dispatch: any) => {
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
    throw new Error(JSON.stringify(error.response.data))
  }
}

export const createTask = (task: any) => async (dispatch: any) => {
  try {
    await HTTP.post(`${TASK_ENDPOINT}/tasks`, task)

    dispatch({
      type: Content,
      payload: (state: IContentReducerState) => ({
        ...state,
        tasks: [...state.tasks, task],
      }),
    })
  } catch (error) {
    throw new Error(JSON.stringify(error.response.data))
  }
}

export const removeTask = (task: any) => async (dispatch: any) => {
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
    throw new Error(JSON.stringify(error.response.data))
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
