import ContactMe from "../components/Contact";
import Introduce from "../components/Introduce";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
// import Project from "./Project";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Aboutme from "../components/Aboutme";
import Skill from "../components/Skill";
import Project from "../components/Project";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="w-full flex flex-col items-center min-h-screen ">
      <Intro />
      <Aboutme />
      <Skill />
      <Project />
      {/* <div className="bg-yellow-100 w-[1140px]">sddf</div> */}
    </main>
  );
};

export default Main;
