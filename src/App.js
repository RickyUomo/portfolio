import About from "./components/About";
import Contact from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work"
import Footer from './components/Footer'

function App() {
  return (

    <main className="text-gray-300 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Work />
      <Footer />
    </main>

  );
}

export default App;
