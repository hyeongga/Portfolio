import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import { useState } from "react";

const Introduce = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  const onClickBtn = () => {};

  return (
    <div>
      <div className="bg-gray-200 max-w-screen-xl mx-auto h-96 flex justify-evenly items-center">
        <div>
          <div>
            <div className="px-80 bg-red-50"></div>
            <img
              className="w-[600px] rounded-lg "
              src={`${process.env.PUBLIC_URL}/images/${22}.jpg`}
              alt="project image"
            />
            <div>title</div>
            <div>content</div>
          </div>
          {/* <div className="mx-auto  bg-gray-300">
            <img
              className="w-[600px] rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/${22}.jpg`}
              alt="project image"
            />
          </div>
          <div className="mx-auto  bg-gray-300">
            <img
              className="w-[600px] rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/${22}.jpg`}
              alt="project image"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Introduce;
