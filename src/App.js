import './App.css';
import Modal from './components/modal/Modal';
import profilePic from './assets/profilepic.jpg'

function App() {
  return (
    // He placed everything inside of a react fragment <> </>. Fragments let you group elements without a wrapper node AKA without adding additional nodes/elements to the DOM. https://react.dev/reference/react/Fragment
    <>
      {/* <section className="intro-section --100vh --flex-center">
        <div className='intro --center-all'>
          <img src={profilePic} alt='profile'/>
          <h1 className='--text-light --text-md --m'>Let's <span className='--fw-thin'>Create a Modal!!!</span></h1>
          <p className='--text-light --mb2'>Click Button Below</p>
          <button className='--btn --btn-secondary'>OPEN MODAL</button>
        </div>
      </section> */}

      <Modal />
    </>
  );
}

export default App;
