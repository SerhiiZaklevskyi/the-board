import React, { useRef } from 'react'
import { TaskEditorView } from './styles'
import { useDispatch } from 'react-redux'
import { addTask } from '../../actions/content'

interface IEditorProps {
  onClose: () => void
}

export const TaskEditor = ({ onClose }: IEditorProps) => {
  const headline = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)
  const status = useRef<HTMLSelectElement>(null)
  const mark = useRef<HTMLSelectElement>(null)

  const dispatch = useDispatch()

  const handleSubmit = (event: any): void => {
    event.preventDefault()
    onClose()
    const task = {
      headline: headline.current && headline.current.value,
      desription: description.current && description.current.value,
      status: status.current && status.current.value,
      mark: mark.current && mark.current.value,
      id: '',
    }
    dispatch(addTask(task))
  }
  return (
    <TaskEditorView>
      <form onSubmit={handleSubmit}>
        <p>
          <input name='headline' placeholder='Enter headline...' ref={headline} />
        </p>
        <p>
          <textarea name='description' placeholder='Provide description...' ref={description} />
        </p>
        <p className='selectWrapper'>
          <select name='status' ref={status}>
            <option>Backlog</option>
            <option>Selected</option>
            <option>Running</option>
            <option>Evaluating</option>
            <option>Live</option>
          </select>
        </p>
        <p className='selectWrapper'>
          <select name='mark' ref={mark}>
            <option>None</option>
            <option>Ui design</option>
            <option>Marketing</option>
            <option>Research</option>
          </select>
        </p>
        <p>
          <button type='submit'>Sumbit</button>
        </p>
      </form>
    </TaskEditorView>
  )
}

export default TaskEditor
