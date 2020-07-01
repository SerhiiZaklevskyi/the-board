import styled from 'styled-components'
import { MODAL_SIZE, SizeType } from './constants'

interface IStylesProps {
  size: SizeType
  show: boolean
}

export const ModalView = styled.div<IStylesProps>`
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  display: ${({ show }) => (show ? 'block' : 'none')};

  .modal-wrapper {
    width: ${({ size }) => MODAL_SIZE[size]};
    position: absolute;
    top: calc(50vh - 590px / 2);
    left: calc(50% - ${({ size }) => MODAL_SIZE[size]} / 2);
    background: white;
    border-radius: 35px;
    text-align: center;
    padding: 2.5rem;
  }

  .close-modal {
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 5%;
    left: 90%;
    background: transparent;
  }

  .modal-header {
    padding-bottom: 1rem;
  }
`
