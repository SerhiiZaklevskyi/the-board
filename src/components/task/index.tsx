import React, { useState } from 'react'
import { TaskView } from './styles'
import SettingsIcon from '@material-ui/icons/Settings'
import Mark from '../mark'
import { useDrag } from 'react-dnd'
import Modal from '../modal'
import { useSelector } from 'react-redux'
import { IStore } from '../../store'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../actions/content'
import { ITaskReducerState } from '../../reducers/reducers'
import { ItemTypes } from './constants'
import { CheckCircleOutline } from '@material-ui/icons'

interface ITaskProps {
  headline?: string
  description?: string
  mark?: string
  status?: any
  id?: string
}

const Task = ({ headline, description, mark, status, id }: ITaskProps) => {
  const [, drag] = useDrag({
    item: { type: ItemTypes.TASK, id },
  })

  const [editable, seteditable] = useState<boolean>(false)

  const handleClick = (): void => {
    seteditable(true)
  }

  const onClose = (): void => {
    seteditable(false)
  }

  const { tasks } = useSelector((state: IStore) => state.content)
  const dispatch = useDispatch()

  const values: ITaskReducerState = {
    headline,
    description,
    status,
    mark,
    id,
  }

  const handleSubmit = (values: ITaskReducerState, { resetForm }: any) => {
    let task = tasks.find((item) => item.id === id)
    const index = task && tasks.indexOf(task)
    dispatch(updateTask({ ...values }, index))
    resetForm({})
    onClose()
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
      <TaskView title={status} ref={drag}>
        {status === 'Live' && (
          <div className='completed'>
            <span className='completeIcon'>
              <CheckCircleOutline />
            </span>
            <span>Completed</span>
          </div>
        )}
        <p className='headline'>{headline}</p>
        <p className='description'>{description}</p>
        <Mark name={mark} />
        <span className='settings'>
          <SettingsIcon onClick={handleClick} />
        </span>
      </TaskView>
    </React.Fragment>
  )
}

export default Task
