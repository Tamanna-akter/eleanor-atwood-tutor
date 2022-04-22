// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs> </Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>

      </Routes>


    </div>
  );
}

export default App;
