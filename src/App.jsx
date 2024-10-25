import Hero from './sections/Hero.jsx';
import Navbar from './sections/Navbar.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;