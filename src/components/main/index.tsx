import React, { useState } from 'react'
import { MainView } from './styles'
import Stage from '../stage'
import Modal from '../modal'
import { IStore } from '../../store'
import { useSelector } from 'react-redux'

const Main = () => {
  const { backlog, selected, running, evaluating, live } = useSelector((state: IStore) => state.content)

  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }
  return (
    <MainView>
      <Stage color='grey' title='Backlog (Open)' tasks={backlog} handleClick={handleClick} />
      <Stage color='yellow' title='Selected' tasks={selected} handleClick={handleClick} />
      <Stage color='red' title='Running' tasks={running} handleClick={handleClick} />
      <Stage color='blue' title='Evaluating' tasks={evaluating} handleClick={handleClick} />
      <Stage color='green' title='Live' tasks={live} handleClick={handleClick} />
      <Modal show={open} size='medium' onClose={onClose} />
    </MainView>
  )
}

export default Main
