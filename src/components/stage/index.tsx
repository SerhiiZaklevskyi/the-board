import React from 'react'
import { StageView } from './styles'
import Task from '../task'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'

interface IStageProps {
  color: string
  title: string
}

const Stage = ({ color, title }: IStageProps) => {
  return (
    <StageView color={color}>
      <div className='header'>
        <span className='stageIcon'>icon</span>
        <span className='stageName'>{title}</span>
        <span className='stageCounter'>1</span>
      </div>
      <div className='taskWrapper'>
        <div className='overlay'>
          <Task />
          <Task />
          <Task />
          <p className='addIcon'>
            <AddCircleOutlinedIcon color='primary' />
          </p>
        </div>
      </div>
    </StageView>
  )
}

export default Stage
