import React, { useState } from 'react'
import { MainView } from './styles'
import Stage from '../stage'
import Modal from '../modal'
import { EmojiObjects, CompareArrows, Settings, HelpOutline, CheckCircleOutline } from '@material-ui/icons'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Main = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <MainView>
        <Stage color='#a19c9c' title='Backlog' handleClick={handleClick} icon={<EmojiObjects />} />
        <Stage color='#f5b516' title='Selected' handleClick={handleClick} icon={<CompareArrows />} />
        <Stage color='#bf132d' title='Running' handleClick={handleClick} icon={<Settings />} />
        <Stage color='#1db9d1' title='Evaluating' handleClick={handleClick} icon={<HelpOutline />} />
        <Stage color='#60cf38' title='Live' handleClick={handleClick} icon={<CheckCircleOutline />} />
        <Modal show={open} size='medium' onClose={onClose} />
      </MainView>
    </DndProvider>
  )
}

export default Main
