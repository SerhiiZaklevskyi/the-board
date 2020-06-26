import React from 'react'
import { ModalView } from './styles'
import { SizeType } from './constants'

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
      <div>
        <p>
          <input name='headline' placeholder='Enter headline...' />
        </p>
        <p>
          <textarea name='description' placeholder='Provide description...' />
        </p>
        <p className='selectWrapper'>
          <select name='status'>
            <option>Backlog</option>
            <option>Selected</option>
            <option>Running</option>
            <option>Evaluating</option>
            <option>Live</option>
          </select>
        </p>
        <p className='selectWrapper'>
          <select name='mark'>
            <option>None</option>
            <option>Ui design</option>
            <option>Marketing</option>
            <option>Research</option>
          </select>
        </p>
        <p>
          <button className='submit'>Sumbit</button>
        </p>
      </div>
    </ModalView>
  )
}

export default Modal
