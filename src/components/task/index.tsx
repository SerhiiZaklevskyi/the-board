import React from 'react'
import { TaskView } from './styles'
import SettingsIcon from '@material-ui/icons/Settings'
import Mark from '../mark'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './constants'

interface ITaskProps {
  headline?: string
  description?: string
  mark?: string
  title?: string
  id?: string
}

const Task = ({ headline, description, mark, title, id }: ITaskProps) => {
  const [, drag] = useDrag({
    item: { type: ItemTypes.TASK, id },
  })
  return (
    <TaskView title={title} ref={drag}>
      <p className='headline'>{headline}</p>
      <p className='description'>{description}</p>
      <Mark name={mark} />
      <span className='settings'>
        <SettingsIcon />
      </span>
    </TaskView>
  )
}

export default Task
