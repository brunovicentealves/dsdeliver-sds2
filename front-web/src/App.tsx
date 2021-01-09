import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './Navbar';
import Routes from './Routes';
import { Toast } from 'react-toastify/dist/components';


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
