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
    <header className="flex justify-center w-full h-[72px] ">
      <div className="flex justify-between items-center w-[1140px] p-4 ">
        <div className=" text-[24px] text-[#453a33] font-bold h-10 items-center">
          <Link to="/">HyeongA</Link>
        </div>
        {/* <ul className=" flex gap-7 h-10 items-center">
          <Link to="/">
            <li className="text-[16px] text-[#453a33] font-bold ">HOME</li>
          </Link>
          <Link to="/Introduce">
            <li className="text-[16px] text-[#453a33] font-bold">INTRODUCE</li>
          </Link>
          <Link to="/Portfolio">
            <li className="text-[16px] text-[#453a33] font-bold ">PROJECT</li>
          </Link>
          <Link to="/Contact">
            <li className="text-[16px] text-[#453a33] font-bold">CONTACT</li>
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
        </ul> */}
      </div>
    </header>
  );
};
export default Header;
