import React from 'react'
import { MainView } from './styles'
import Stage from '../stage'
import { IStore } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

const Main = () => {
  const tasks = useSelector((state: IStore) => state.content.tasks)
  console.log('tasks', tasks)

  return (
    <MainView>
      <Stage color='grey' title='Backlog (Open)' />
      <Stage color='yellow' title='Selected' />
      <Stage color='red' title='Running' />
      <Stage color='blue' title='Evaluating' />
      <Stage color='green' title='Live' />
    </MainView>
  )
}

export default Main
