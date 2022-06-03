import './App.css';
import { ToastContainer } from "react-toastify"
import Home from './pages/home';

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <Home/>
      
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      
    </div>
  );
}

export default App;
