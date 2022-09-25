
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import SwiperComponent from './components/Swieper/SwiperCompnonet';
import Home from './pages/Home'
import About from './pages/About'
import Information from "./components/Informations/Information";
import Introduce from "./components/Introduce/Introduce";
import Doctors from "./components/Doctors/Doctors";
import Help from "./components/help/Help";
import Testmonieles from "./components/Testmoniles/Testmonieles";
 
function App() {
  return (
    <>
      <NavbarComponent/>
      <SwiperComponent/>
      <Information/>
      <Introduce/>
      <Doctors/>
      <Help/>
      <Testmonieles/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>

  );
}

export default App;
