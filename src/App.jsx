import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageView from "./pages/PageView";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Quotes from "./components/Quotes";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><PageView component={About} /></Layout>} />
        <Route path="/skills" element={<Layout><PageView component={Skills} /></Layout>} />
        <Route path="/projects" element={<Layout><PageView component={Projects} /></Layout>} />
        <Route path="/contact" element={<Layout><PageView component={Contact} /></Layout>} />
        <Route path="/quotes" element={<Layout><PageView component={Quotes} /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
