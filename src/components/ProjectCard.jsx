import { useState } from "react";
import { Link } from "react-router-dom";

function PortfolioCard({ title, desc, image, index }) {
  return (
    <div className="bg-slate-50 shadow-2xl w-[1000px] rounded-xl m-4 p-4 ">
      <div className="font-bold text-[40px] bg-slate-400 text-center">{`${title}`}</div>
      <div className="flex justify-around">
        <img
          className="w-[400px] h-[280px] object-cover rounded-xl"
          src={`./images/${image}.png`}
          alt="project image"
        ></img>
        <div className="bg-red-400">
          asdfd
          <div className="text-xl font-bold mt-2 mx-2">{title}</div>
          <div className="mt-2 mx-2">{desc}</div>
          <Link
            to={`/project/${index}?title=${title}&desc=${desc}&image=${image}`}
          ></Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
