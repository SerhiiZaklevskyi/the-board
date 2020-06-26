import styled from 'styled-components'
import { MODAL_SIZE, SizeType } from './constants'

interface IStylesProps {
  size: SizeType
  show: boolean
}

export const ModalView = styled.div<IStylesProps>`
  width: ${({ size }) => MODAL_SIZE[size]};
  position: absolute;
  top: calc(50vh - 590px / 2);
  left: calc(50% - ${({ size }) => MODAL_SIZE[size]} / 2);
  background: white;
  border-radius: 35px;
  text-align: center;
  display: ${({ show }) => (show ? 'block' : 'none')};

  input {
    padding: 10px 20px;
    border-radius: 15px;
    width: 80%;
    outline: none;
  }

  .submit {
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

  .close-modal {
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 90%;
  }
`
