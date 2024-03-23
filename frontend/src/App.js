import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import { Navbar } from './components/navbar/Navbar';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
