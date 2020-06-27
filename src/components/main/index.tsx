import React, { useState } from 'react'
import { MainView } from './styles'
import Stage from '../stage'
import Modal from '../modal'
import { IStore } from '../../store'
import { useSelector } from 'react-redux'

const Main = () => {
  const { tasks } = useSelector((state: IStore) => state.content)

  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  const filterTasks = (status: string) => {
    return tasks.filter((task) => task.status === status)
  }

  return (
    <MainView>
      <Stage color='grey' title='Backlog (Open)' tasks={filterTasks('Backlog')} handleClick={handleClick} />
      <Stage color='yellow' title='Selected' tasks={filterTasks('Selected')} handleClick={handleClick} />
      <Stage color='red' title='Running' tasks={filterTasks('Running')} handleClick={handleClick} />
      <Stage color='blue' title='Evaluating' tasks={filterTasks('Evaluating')} handleClick={handleClick} />
      <Stage color='green' title='Live' tasks={filterTasks('Live')} handleClick={handleClick} />
      <Modal show={open} size='medium' onClose={onClose} />
    </MainView>
  )
}

export default Main
