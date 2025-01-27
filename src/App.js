import './App.css';
import Ruta from './Components/Ruta/Ruta';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Planes from './Components/Planes/Planes';
import VideoTour from './Components/VideoTour/VideoTour';
import NaranjaPos from './Components/NaranjaPos/NaranjaPos';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes/PreguntasFrecuentes';
import CaracteristicasYFuncionalidades from './Components/CaracteristicasYFuncionalidades/CaracteristicasYFuncionalidades';
import Beneficios from './Components/Beneficios/Beneficios';
import NaranjaErp from './Components/NaranjaErp/NaranjaErp';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <NaranjaErp />
      <Beneficios />
      <Ruta />
      <CaracteristicasYFuncionalidades />
      <VideoTour />
      <NaranjaPos />
      <Planes />
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
}

export default App;
