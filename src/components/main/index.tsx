import React, { useState } from 'react'
import { MainView } from './styles'
import Stage from '../stage'
import Modal from '../modal'
import { IStore } from '../../store'
import { useSelector } from 'react-redux'
import { EmojiObjects, CompareArrows, Settings, HelpOutline, CheckCircleOutline } from '@material-ui/icons'

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
      <Stage
        color='#a19c9c'
        title='Backlog (Open)'
        tasks={filterTasks('Backlog')}
        handleClick={handleClick}
        icon={<EmojiObjects />}
      />
      <Stage
        color='#f5b516'
        title='Selected'
        tasks={filterTasks('Selected')}
        handleClick={handleClick}
        icon={<CompareArrows />}
      />
      <Stage
        color='#bf132d'
        title='Running'
        tasks={filterTasks('Running')}
        handleClick={handleClick}
        icon={<Settings />}
      />
      <Stage
        color='#1db9d1'
        title='Evaluating'
        tasks={filterTasks('Evaluating')}
        handleClick={handleClick}
        icon={<HelpOutline />}
      />
      <Stage
        color='#60cf38'
        title='Live'
        tasks={filterTasks('Live')}
        handleClick={handleClick}
        icon={<CheckCircleOutline />}
      />
      <Modal show={open} size='medium' onClose={onClose} />
    </MainView>
  )
}

export default Main
