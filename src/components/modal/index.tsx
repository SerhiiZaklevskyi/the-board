import React from 'react'
import { ModalView } from './styles'
import { SizeType } from './constants'
import TaskEditor from '../task-editor'

interface IModalProps {
  size: SizeType
  show: boolean
  onClose: () => void
}
const Modal = ({ size, show, onClose }: IModalProps) => {
  return (
    <ModalView size={size} show={show}>
      <div className='modal-header'>
        Create Task
        <button className='close-modal' type='button' onClick={onClose}>
          &times;
        </button>
      </div>
      <TaskEditor onClose={onClose} />
    </ModalView>
  )
}

export default Modal
