import './App.css';
import Modal from './components/modal/Modal';
import profilePic from './assets/profilepic.jpg'
import { useState } from 'react';

function App() {
  // Set to false initially
  const [showModal, setShowModal] = useState(false);

  const handleShowModal =() => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    // He placed everything inside of a react fragment <> </>. Fragments let you group elements without a wrapper node AKA without adding additional nodes/elements to the DOM. https://react.dev/reference/react/Fragment
    <>
      <section className="intro-section --100vh --flex-center">
        <div className='intro --center-all'>
          <img src={profilePic} alt='profile'/>
          <h1 className='--text-light --text-md --m'>Let's <span className='--fw-thin'>Create a Modal!!!</span></h1>
          <p className='--text-light --mb2'>Click Button Below</p>
          <button className='--btn --btn-secondary' onClick={handleShowModal}>OPEN MODAL</button>
        </div>
      </section>

      {/* If showModal is true, show the modal. Give it a prop of onCloseModal, which triggers the handleCloseModal function */}
      {showModal && <Modal onCloseModal={handleCloseModal}/>}
    </>
  );
}

export default App;
