import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Register from './Compontent/Register';
import Login from './Compontent/Login';
import Home from './Compontent/Home';
import Multiple from './Compontent/Multiple';

function App() {
  return (
<>
<Routes>
  
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/multiple" element={<Multiple />} />
   

</Routes>
</>
  );
}

export default App;
