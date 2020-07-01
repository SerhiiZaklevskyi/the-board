import React from 'react'
import { TaskView } from './styles'
import SettingsIcon from '@material-ui/icons/Settings'
import Mark from '../../components/mark'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../components/task/constants'
import { CheckCircleOutline } from '@material-ui/icons'

interface ITaskProps {
  headline?: string
  description?: string
  mark?: string
  status?: any
  _id?: string
  deleteTask: () => void
  openEditor: () => void
}

const TaskUi = ({ headline, description, mark, status, _id, openEditor, deleteTask }: ITaskProps) => {
  const [, drag] = useDrag({
    item: { type: ItemTypes.TASK, _id },
  })

  return (
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
      {mark && <Mark name={mark} />}
      <span className='delete' onClick={deleteTask}>
        &times;
      </span>
      <span className='settings'>
        <SettingsIcon onClick={openEditor} />
      </span>
    </TaskView>
  )
}

export default TaskUi
