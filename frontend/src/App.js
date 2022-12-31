import Entry from './components/entry';
import Register from './components/register';
import Login from './components/login'
import { BrowserRouter, Routes, Route } from "react-router-dom"; /*npm install react-router-dom*/
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



function App() {
  return (

    <BrowserRouter>
    <div>
        <Routes>
          <Route path="/" element={< Entry />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/signin" element={<Login />}></Route>
        </Routes> 
        
      
      </div>
    </BrowserRouter>
  );
}

export default App;

