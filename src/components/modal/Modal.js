import React from 'react'
import "./Modal.css"
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";

// Pass in a prop as a destructured object. We will use the prop to pass in the onCloseModal prop, which we created and passed in via App.js
const Modal = ({ onCloseModal }) => {
  return (
    // modal section creates the overlay of the black background on top of the main screen. We assign the close-modal class to all the elements that have the onClick event to close the modal
    <section className='modal-section --100vh close-modal' onClick={onCloseModal}>
      <div className='modal --flex-center'>
        <div className='modal-content --bg-light --p --card'>
          <AiOutlineClose color="red" size={16} className='close-icon close-modal' onClick={onCloseModal}/>
          
          <div className='modal-header --flex-start'>
            <AiOutlineInfoCircle color="orangered" size={18}/>
            <h3 className='--text-p --ml'>Do you want to continue?</h3>
          </div>

          <div className='modal-body'>
            <p className='--text-sm --mb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className='modal-footer --flex-end'>
            <button className='--btn close-modal' onClick={onCloseModal}>Cancel</button>
            <button className='--btn --btn-primary'>Proceed</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modal
