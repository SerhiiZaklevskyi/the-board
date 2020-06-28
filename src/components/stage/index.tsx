import React from 'react'
import { StageView } from './styles'
import Task from '../task'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import { ITaskReducerState } from '../../reducers/reducers'
import { ItemTypes } from '../task/constants'
import { useDrop } from 'react-dnd'
import { changeStatus } from '../../actions/content'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../store'

interface IStageProps {
  color: string
  title: string
  handleClick: () => void
  icon: any
}

const Stage = ({ color, title, handleClick, icon }: IStageProps) => {
  const dispatch = useDispatch()
  const { tasks } = useSelector((state: IStore) => state.content)

  const filterTasks = (status: string) => {
    return tasks.filter((task) => task.status === status)
  }
  const changeTaskStatus = (element: any, status: string) => {
    let task = tasks.find((item) => item.id === element.id)
    const index = task && tasks.indexOf(task)
    task = { ...task, status }
    dispatch(changeStatus(task, index))
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
        <span className='stageCounter'>{tasks.length}</span>
      </div>
      <div className='taskWrapper' ref={drop}>
        <div className='overlay'>
          {filterTasks(title).map((item: ITaskReducerState) => (
            <Task
              key={item.id}
              headline={item.headline}
              description={item.description}
              mark={item.mark}
              title={title}
              id={item.id}
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
