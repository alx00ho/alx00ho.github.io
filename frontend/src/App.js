import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <body>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
          </div>
        </body>
      </Router>
    </>
  );
}

export default App;
