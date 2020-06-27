import styled from 'styled-components'
import { Form } from 'formik'

export const TaskEditorView = styled(Form)`
  input {
    padding: 10px 20px;
    border-radius: 15px;
    width: 93%;
    outline: none;
    margin-bottom: 1rem;
  }

  button[type='submit'] {
    padding: 8px 25px;
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
