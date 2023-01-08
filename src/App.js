import Home from "./components/Home";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="text-gray-300 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
