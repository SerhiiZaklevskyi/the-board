import styled from 'styled-components'
import { Form } from 'formik'

export const TaskEditorView = styled(Form)`
font-size: 1rem;
  input {
    padding: 0.7rem 1.3rem;
    border-radius: 15px;
    width: 93%;
    outline: none;
    margin-bottom: 1rem;
  }

  button[type='submit'] {
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    outline: none;
    background-color: blue;
    color: white;
    cursor: pointer;
  }

  textarea {
    width: 100%;
    min-height: 150px;
    resize: none;
    border-radius: 15px;
    outline: none;
    margin-bottom: 1rem;
  }

   select {
      min-width: 120px;
      padding: 10px 15px;
      border-radius: 15px;
      outline: none;
      display: block;
      margin-bottom: 1rem;
      
    }
  }

`
