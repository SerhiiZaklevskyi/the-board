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
  icon: any
}

const Stage = ({ color, title, tasks, handleClick, icon }: IStageProps) => {
  return (
    <StageView color={color}>
      <div className='header'>
        <span className='stageIcon'>{icon}</span>
        <span className='stageName'>{title}</span>
        <span className='stageCounter'>{tasks.length}</span>
      </div>
      <div className='taskWrapper'>
        <div className='overlay'>
          {tasks.map((item: ITaskReducerState) => (
            <Task
              key={item.id}
              headline={item.headline}
              description={item.description}
              mark={item.mark}
              title={title}
            />
          ))}
          <span className='addIcon'>
            <AddCircleOutlinedIcon style={{ fill: 'white', marginTop: '1rem' }} onClick={handleClick} />
          </span>
        </div>
      </div>
    </StageView>
  )
}

export default Stage
