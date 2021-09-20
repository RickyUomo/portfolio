import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main className="text-gray-300 bg-gray-900 body-font">
        <About />
      </main>
    </div>

  );
}

export default App;
