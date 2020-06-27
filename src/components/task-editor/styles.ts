import styled from 'styled-components'

export const TaskEditorView = styled.div`
  input {
    padding: 10px 20px;
    border-radius: 15px;
    width: 80%;
    outline: none;
  }

  button[type='submit'] {
    padding: 5px 10px;
    border-radius: 15px;
    outline: none;
    background-color: blue;
    color: white;
  }

  textarea {
    width: 85%;
    min-height: 80px;
    resize: none;
    border-radius: 15px;
    outline: none;
  }

  .selectWrapper {
    text-align: left;
    margin-left: 8%;

    & select {
      min-width: 120px;
      padding: 10px 15px;
      border-radius: 15px;
      outline: none;
    }
  }

  .modal-header {
    position: relative;
  }
`
