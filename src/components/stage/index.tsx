import React from 'react'
import { StageView } from './styles'
import Task from '../task'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import { ITaskReducerState } from '../../reducers/reducers'
import { ItemTypes } from '../task/constants'
import { useDrop } from 'react-dnd'
import { updateTask } from '../../actions/content'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../store'

interface IStageProps {
  color: string
  title: string
  icon: any
  handleClick: () => void
  currentTasks: Array<ITaskReducerState>
}

const Stage = ({ color, title, icon, handleClick, currentTasks }: IStageProps) => {
  const dispatch = useDispatch()
  const { tasks } = useSelector((state: IStore) => state.content)

  const changeTaskStatus = (element: any, status: string) => {
    let task = tasks.find((item) => item.id === element.id)
    const index = task && tasks.indexOf(task)
    task = { ...task, status }
    dispatch(updateTask(task, index))
  }

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop(item) {
      changeTaskStatus(item, title)
    },
  })

  return (
    <StageView color={color}>
      <div className='header'>
        <span className='stageIcon'>{icon}</span>
        <span className='stageName'>{title}</span>
        <span className='stageCounter'>{currentTasks.length}</span>
      </div>
      <div className='taskWrapper' ref={drop}>
        <div className='overlay'>
          {currentTasks.map((item: ITaskReducerState) => (
            <Task
              key={item.id}
              headline={item.headline}
              description={item.description}
              mark={item.mark}
              title={title}
              id={item.id}
            />
          ))}
          <span>
            <AddCircleOutlinedIcon className='addIcon' onClick={handleClick} />
          </span>
        </div>
      </div>
    </StageView>
  )
}

export default Stage
