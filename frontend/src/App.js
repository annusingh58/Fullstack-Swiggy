import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
<Routes>
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/home" element={<Home />}/>

</Routes>
</>
  );
}

export default App;
