import styled from 'styled-components'
import { Form } from 'formik'

export const TaskEditorView = styled(Form)`
font-size: 1rem;
  input {
    padding: 0.7rem 1.3rem;
    border-radius: 15px;
    width: 92%;
    outline: none;
    margin-bottom: 1rem;
    border: 1px solid blue;
  }

  button[type='submit'] {
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    outline: none;
    background-color: blue;
    color: white;
    cursor: pointer;
    border: 1px solid blue;
  }

  textarea {
    width: 95%;
    min-height: 150px;
    resize: none;
    border-radius: 15px;
    outline: none;
    margin-bottom: 1rem;
    border: 1px solid blue;
    padding: 8px;
  }

   select {
      min-width: 200px;
      padding: 10px 15px;
      border-radius: 15px;
      outline: none;
      display: block;
      margin-bottom: 1rem;
      border: 1px solid blue;
      
    }
  }

`
