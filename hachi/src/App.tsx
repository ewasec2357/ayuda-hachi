import { Hero } from './components/Hero';
import { EstadoClinico } from './components/EstadoClinico';
import { Tratamiento } from './components/Tratamiento';
import { ComoDonar } from './components/ComoDonar';
import { Transparencia } from './components/Transparencia';
import { Galeria } from './components/Galeria';
import { OtrasFormasDeAyudar } from './components/OtrasFormasDeAyudar';
import { Footer } from './components/Footer';

export function App() {
  return (
    <main>
      <Hero />
      <EstadoClinico />
      <Tratamiento />
      <ComoDonar />
      <Transparencia />
      <Galeria />
      <OtrasFormasDeAyudar />
      <Footer />
    </main>
  );
}
