import React from 'react'
import "./Modal.css"
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";

const Modal = () => {
  return (
    <section className='modal-section --100vh'>
      <div className='modal --flex-center'>
        <div className='modal-content --bg-light --p --card'>
          <AiOutlineClose color="red" size={16} className='close-icon'/>
          
          <div className='modal-header --flex-start'>
            <AiOutlineInfoCircle color="orangered" size={18}/>
            <h3 className='--text-p --ml'>Do you want to continue?</h3>
          </div>

          <div className='modal-body'>
            <p className='--text-sm --mb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className='modal-footer --flex-end'>
            <button className='--btn'>Cancel</button>
            <button className='--btn --btn-primary'>Proceed</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modal
