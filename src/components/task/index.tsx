import React from 'react'
import { TaskView } from './styles'
import SettingsIcon from '@material-ui/icons/Settings'
import Mark from '../mark'

interface ITaskProps {
  headline: string | undefined
  description: string | undefined
  mark: string | undefined
  title: string
}

const Task = ({ headline, description, mark, title }: ITaskProps) => {
  return (
    <TaskView title={title}>
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
