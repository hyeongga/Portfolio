import { useState } from "react";
import { HiHeart } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  const [likes, setLikes] = useState(false);
  const [count, setCount] = useState(0);
  const onClickToggle = () => {
    setLikes(!likes);
    if (!likes) {
      setCount(count + 1);
    } else if (likes) {
      setCount(count - 1);
    }
  };
  return (
    <header className="h-28">
      <div className="max-w-full h-full flex justify-between items-center px-6">
        <div className="px-4">
          <Link to="/">
            <button className="flex items-center">
              <img
                className="w-10 rounded-full"
                src={`${process.env.PUBLIC_URL}/images/7.png`}
                alt="logo"
              />
              <div className="ml-2">HyeongA </div>
            </button>
          </Link>
        </div>
        <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
          <Link to="/">
            <li className="">HOME</li>
          </Link>

          <Link to="/Portfolio">
            <li className="">PROJECT</li>
          </Link>

          <Link to="/Introduce">
            <li className="">ABOUT</li>
          </Link>
          <Link to="/Contact">
            <li className="">CONTACT</li>
          </Link>

          <button className="relative" onClick={onClickToggle}>
            {likes ? (
              <HiHeart
                onClick={onClickToggle}
                className=""
                size={35}
                color="purple"
              />
            ) : (
              <HiOutlineHeart
                onClick={onClickToggle}
                className=""
                size={35}
                color="purple"
              />
            )}
            <div className="absolute top-1 left-3 text-white t">{count}</div>
          </button>
        </ul>
      </div>
    </header>
  );
};
export default Header;
