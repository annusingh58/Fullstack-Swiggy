import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Register from './Compontent/Register';
import Login from './Compontent/Login';

function App() {
  return (
<>
<Routes>
  
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/login" element={<Login />} />
   

</Routes>
</>
  );
}

export default App;
