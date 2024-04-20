import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import Legal from './components/Legal/Legal'
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div>
       <ScrollToTop smooth top="20" style={{backgroundColor:"rgb(128, 136, 231)",paddingLeft:"5px", zIndex:"100"}} color='white'/> 
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/legal' element={<Legal/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forget' element={<ForgetPassword/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
