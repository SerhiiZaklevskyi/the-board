import React from 'react'
import { TaskEditorView } from './styles'
import { useDispatch } from 'react-redux'
import { addTask } from '../../actions/content'
import { Formik, Field } from 'formik'
import { useSelector } from 'react-redux'
import { IStore } from '../../store'

interface IEditorProps {
  onClose: () => void
}

export const TaskEditor = ({ onClose }: IEditorProps) => {
  const { tasks } = useSelector((state: IStore) => state.content)
  const dispatch = useDispatch()

  interface IFormikValues {
    headline?: string
    description?: string
    status: string
    mark?: string
  }

  const values: IFormikValues = {
    headline: '',
    description: '',
    status: 'Backlog',
    mark: '',
  }

  const handleSubmit = (values: IFormikValues, { resetForm }: any) => {
    onClose()
    dispatch(addTask({ ...values, id: tasks.length + 1 }))
    resetForm({})
  }

  return (
    <Formik initialValues={values} onSubmit={handleSubmit}>
      <TaskEditorView>
        <Field name='headline' type='text' placeholder='Enter headline...' required />
        <Field as='textarea' name='description' type='text' placeholder='Provide description...' />
        <Field as='select' name='status'>
          <option value='Backlog'>Backlog</option>
          <option value='Selected'>Selected</option>
          <option value='Running'>Running</option>
          <option value='Evaluating'>Evaluating</option>
          <option value='Live'>Live</option>
        </Field>
        <Field as='select' name='mark'>
          <option value='None'>None</option>
          <option value='Ui Design'>Ui Design</option>
          <option value='Marketing'>Marketing</option>
          <option value='Research'>Research</option>
        </Field>
        <button type='submit'>Submit</button>
      </TaskEditorView>
    </Formik>
  )
}

export default TaskEditor
