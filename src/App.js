import './App.css';
import Modal from './components/modal/Modal';
import profilePic from './assets/profilepic.jpg'

function App() {
  return (
    // He placed everything inside of a react fragment <> </>. Fragments let you group elements without a wrapper node AKA without adding additional nodes/elements to the DOM. https://react.dev/reference/react/Fragment
    <>
      <section className="intro-section">
        <div className='intro'>
          <img src={profilePic} alt='profile'/>
          <h1>Let's <span>Create a Modal!!!</span></h1>
          <p>Click Button Below</p>
          <button>OPEN MODAL</button>
        </div>
      </section>
    </>
  );
}

export default App;
