import About from './components/About';
import Summary from './components/Summary';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <Navbar />
      <Summary />
      <Skills />
      <About />
      <Projects />
    </>
  );
};
export default App;