import React, { useState, useEffect } from 'react'
import { MainView } from './styles'
import Stage from '../stage'
import { EmojiObjects, CompareArrows, Settings, HelpOutline, CheckCircleOutline } from '@material-ui/icons'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Modal from '../modal'
import { createTask, getAllTasks } from '../../actions/content'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../store'
import { ITaskReducerState } from '../../reducers/reducers'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTasks())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { tasks } = useSelector((state: IStore) => state.content)
  const columns = [
    {
      color: '#a19c9c',
      title: 'Backlog',
      icon: <EmojiObjects />,
      id: '1',
    },
    {
      color: '#f5b516',
      title: 'Selected',
      icon: <CompareArrows />,
      id: '2',
    },
    {
      color: '#bf132d',
      title: 'Running',
      icon: <Settings />,
      id: '3',
    },
    {
      color: '#1db9d1',
      title: 'Evaluating',
      icon: <HelpOutline />,
      id: '4',
    },
    {
      color: '#60cf38',
      title: 'Live',
      icon: <CheckCircleOutline />,
      id: '5',
    },
  ]

  const filterTasks = (status: string) => {
    return tasks.filter((task) => task.status === status)
  }

  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  const values: ITaskReducerState = {
    headline: '',
    description: '',
    status: 'Backlog',
    mark: '',
    _id: '',
  }

  const handleSubmit = (values: ITaskReducerState, { resetForm }: any): void => {
    onClose()
    dispatch(createTask({ ...values }))
    resetForm({})
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <MainView>
        {columns.map(({ color, title, icon, id }) => (
          <Stage
            color={color}
            title={title}
            icon={icon}
            key={id}
            handleClick={handleClick}
            currentTasks={filterTasks(title)}
          />
        ))}
      </MainView>
      <Modal
        show={open}
        size='medium'
        onClose={onClose}
        values={values}
        handleSubmit={handleSubmit}
        header={'Create Task'}
      />
    </DndProvider>
  )
}

export default Main
