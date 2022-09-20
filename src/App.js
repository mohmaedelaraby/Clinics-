
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import SwiperComponent from './components/Swieper/SwiperCompnonet';
import Home from './pages/Home'
import About from './pages/About'
 
function App() {
  return (
    <>
      <NavbarComponent/>
      <SwiperComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>

  );
}

export default App;
