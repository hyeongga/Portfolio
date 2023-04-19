//import ReactLogo from "./images/react.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Project/:projectIndex" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
