import React from 'react'
import { TaskEditorView } from './styles'
import { Formik, Field } from 'formik'

interface IEditorProps {
  values: any
  handleSubmit: any
}

export const TaskEditor = ({ values, handleSubmit }: IEditorProps) => {
  return (
    <Formik initialValues={values} onSubmit={handleSubmit}>
      <TaskEditorView>
        <Field name='headline' type='text' placeholder='Enter headline...' required maxLength='70' />
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
