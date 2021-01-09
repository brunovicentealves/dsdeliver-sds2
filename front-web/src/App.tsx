import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { homedir } from 'os';
import './App.css';
import Counter from './Counter';
import Navbar from './Navbar';
import Routes from './Routes';


function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <ToastContainer/>
    </>


  );
}

export default App;
