import React from 'react'
import { StageView } from './styles'
import Task from '../task'

export const Stage = () => {
  return (
    <StageView>
      <div>
        <span>icon</span>
        <span>name</span>
        <span>counter</span>
      </div>
      <div>
        <Task />
        <Task />
        <Task />
      </div>
    </StageView>
  )
}

export default Stage
