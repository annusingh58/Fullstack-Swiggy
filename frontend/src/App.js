import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Register from './Compontent/Register';
import Login from './Compontent/Login';
import Home from './Compontent/Home';
import Multiple from './Compontent/Multiple';
import Addform from './Compontent/Addform';

function App() {
  return (
<>
<Routes>
  
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/multiple" element={<Multiple />} />
    <Route exact path="/addform" element={<Addform/>}/>
   

</Routes>
</>
  );
}

export default App;
