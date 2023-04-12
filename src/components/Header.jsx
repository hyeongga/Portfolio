import { useState } from "react";
import { HiHeart } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";

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
    <header className="bg-blue-100 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <div>
          H's Portfolio
          {/* <img className="w-12" src={ReactLogo} alt="React" /> */}
        </div>
        <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
          <li className="bg-indigo-300 btn-style">Introduce</li>
          <li className="bg-indigo-500 btn-style">Portfolio</li>
          <li className="bg-indigo-700 btn-style">Contact Me</li>
          <div className="">
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
          </div>
          <li className="px-2 py-1">{count}</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
