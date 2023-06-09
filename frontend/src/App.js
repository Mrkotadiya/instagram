import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './Components/CreatePost/CreatePost';


function App() {
  return (
<BrowserRouter>
    <div className="App">

     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/signup' element={<SignUp/>} />
       <Route path='/signin' element={<SignIn/>} />
       <Route path='/profile' element={<Profile/>} />
       <Route path='/createpost' element={<CreatePost/>} />
     </Routes>
     <ToastContainer theme='dark'/>
    </div>
    </BrowserRouter>
  );
}

export default App;
