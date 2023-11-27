
import { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import aos from "aos"
import "aos/dist/aos.css"
import Admission from './Pages/Admission';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Aboutpage from './Pages/Aboutpage';
import Signup from './Pages/Signup';
import View from './Pages/View';
function App() {
useEffect(()=>{
  aos.init()
},[])
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/admission' element={<Admission/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/about' element={<Aboutpage/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/view' element={<View/>} ></Route>
      </Routes>
      
     
      <Footer/>
    </div>
  );
}

export default App;
