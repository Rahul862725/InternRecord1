import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Singup from './components/Signup';
import Footer from './components/Footer';
import Decrypted from './components/Decrypted';
import Encrypted from './components/Encrypted';
import { Route, Routes } from 'react-router-dom'
 

function App() {
  return (
    <  > 
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login color='black' backgroundColor="white"/>} />
        <Route exact path="/signup" element={<Singup color='black' backgroundColor="white"/>} />
        <Route exact path="/decrypt" element={<Decrypted/>} />
        <Route exact path="/encrypt" element={<Encrypted/>} />
       

      </Routes>
      <Footer email="#" github="#" linkedin="#"/>
    </>
  );
}

export default App;
