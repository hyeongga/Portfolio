//import ReactLogo from "./images/react.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Contact from "./components/Contact";
import Introduce from "./components/Introduce";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Project/:projectIndex" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Introduce" element={<Introduce />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
