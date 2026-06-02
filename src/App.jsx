import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageView from "./pages/PageView";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";
import Quotes from "./components/Quotes";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<PageView component={About} />} />
        <Route path="/skills" element={<PageView component={Skills} />} />
        <Route path="/projects" element={<PageView component={Projects} />} />
        <Route path="/contact" element={<PageView component={Contact} />} />
        <Route path="/quotes" element={<PageView component={Quotes} />} />
      </Routes>
    </Router>
  );
}

export default App;
