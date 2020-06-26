import React from 'react'
import { StageView } from './styles'
import Task from '../task'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import { ITaskReducerState } from '../../reducers/reducers'

interface IStageProps {
  color: string
  title: string
  tasks: Array<ITaskReducerState>
  handleClick: () => void
}

const Stage = ({ color, title, tasks, handleClick }: IStageProps) => {
  return (
    <StageView color={color}>
      <div className='header'>
        <span className='stageIcon'>icon</span>
        <span className='stageName'>{title}</span>
        <span className='stageCounter'>{tasks.length}</span>
      </div>
      <div className='taskWrapper'>
        <div className='overlay'>
          {tasks.map((item: ITaskReducerState) => (
            <Task key={item.id} />
          ))}
          <span className='addIcon'>
            <AddCircleOutlinedIcon color='primary' onClick={handleClick} />
          </span>
        </div>
      </div>
    </StageView>
  )
}

export default Stage
