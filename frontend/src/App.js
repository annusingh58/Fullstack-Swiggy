import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Register from './Compontent/Register';

function App() {
  return (
<>
<Routes>
    <Route exact path="/register" element={<Register />} />
   

</Routes>
</>
  );
}

export default App;
