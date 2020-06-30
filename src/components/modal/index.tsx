import React from 'react'
import { ModalView } from './styles'
import { SizeType } from './constants'
import TaskEditor from '../task-editor'
import ReactDOM from 'react-dom'
import { ITaskReducerState } from '../../reducers/reducers'

interface IModalProps {
  size: SizeType
  show: boolean
  onClose: () => void
  values: ITaskReducerState
  handleSubmit: any
  header: string
}

const Modal = ({ size, show, onClose, values, handleSubmit, header }: IModalProps) => {
  return ReactDOM.createPortal(
    <ModalView size={size} show={show}>
      <div className='modal-wrapper'>
        <div className='modal-header'>
          {header}
          <button className='close-modal' type='button' onClick={onClose}>
            &times;
          </button>
        </div>
        <TaskEditor values={values} handleSubmit={handleSubmit} />
      </div>
    </ModalView>,
    document.getElementById('modal') as HTMLElement
  )
}

export default Modal
