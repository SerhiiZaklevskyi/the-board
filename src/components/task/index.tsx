import React, { useState } from 'react'
import Modal from '../modal'
import { useSelector } from 'react-redux'
import { IStore } from '../../store'
import { useDispatch } from 'react-redux'
import { updateTask, removeTask } from '../../actions/content'
import { ITaskReducerState } from '../../reducers/reducers'
import TaskUi from '../../ui/taskUi'

interface ITaskProps {
  headline?: string
  description?: string
  mark?: string
  status?: any
  _id?: string
}

const Task = ({ headline, description, mark, status, _id }: ITaskProps) => {
  const [editable, seteditable] = useState<boolean>(false)
  const { tasks } = useSelector((state: IStore) => state.content)
  const dispatch = useDispatch()

  const handleClick = (): void => {
    seteditable(true)
  }

  const onClose = (): void => {
    seteditable(false)
  }

  const values: ITaskReducerState = {
    headline,
    description,
    status,
    mark,
    _id,
  }

  const handleSubmit = (values: any, { resetForm }: any) => {
    let task = tasks.find((item) => item._id === _id)
    const index = task && tasks.indexOf(task)
    dispatch(updateTask({ ...values }, index))
    resetForm({})
    onClose()
  }

  const deleteTask = () => {
    let task = tasks.find((item) => item._id === _id)
    task && dispatch(removeTask(task))
  }

  return (
    <React.Fragment>
      {editable && (
        <Modal
          onClose={onClose}
          size='medium'
          show={editable}
          values={values}
          handleSubmit={handleSubmit}
          header={'Edit Task'}
        />
      )}
      <TaskUi
        openEditor={handleClick}
        headline={headline}
        description={description}
        mark={mark}
        status={status}
        _id={_id}
        deleteTask={deleteTask}
      />
    </React.Fragment>
  )
}

export default Task
