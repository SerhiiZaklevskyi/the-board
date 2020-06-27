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

  .close-modal {
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 90%;
  }
`
