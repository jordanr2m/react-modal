import React from 'react'
import "./Modal.css"
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";

const Modal = () => {
  return (
    <section className='modal-section'>
      <div className='modal'>
        <div className='modal-close'>
          <AiOutlineClose color="red" size={16} className='close-icon'/>
        </div>

        <div className='modal-header'>
          <AiOutlineInfoCircle color="orangered" size={18}/>
          <h3>Do you want to continue?</h3>
        </div>

        <div className='modal-body'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className='modal-footer'>
          <button>Cancel</button>
          <button>Proceed</button>
        </div>
      </div>
    </section>
  )
}

export default Modal
