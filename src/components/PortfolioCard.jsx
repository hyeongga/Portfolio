import { useState } from "react";
import { Link } from "react-router-dom";

function PortfolioCard({ title, desc, image, index }) {
  const [isHovering, setIsHovering] = useState(false);
  const colors = [
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-teal-300",
    "bg-sky-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
  ];

  const onMouseOver = () => {
    setIsHovering(1);
  };
  const onMouseOut = () => {
    setIsHovering(0);
  };

  return (
    <li className="relative bg-yellow-300 w-80 h-62 rounded-xl shadow-lg">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={`./${image}`}
        alt="project image"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      ></img>

      <div className="relative">
        {isHovering ? (
          <div className="absolute bg-red-300">
            <div className="text-xl font-bold mt-2 mx-2">{title}</div>
            <div className="mt-2 mx-2">{desc}</div>
            <Link
              to={`/project/${index}?title=${title}&desc=${desc}&image=${image}`}
            >
              <button
                className={`absolute bottom-0 right-0 m-4 px-4 py-2 rounded-md ${
                  colors[index % colors.length]
                }`}
              >
                View
              </button>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </li>
  );
}

export default PortfolioCard;
