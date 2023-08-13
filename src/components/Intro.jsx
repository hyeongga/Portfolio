import { SlArrowDown } from "react-icons/sl";
const Intro = () => {
  return (
    <div className="w-full bg-[#343434] flex flex-col items-center justify-center">
      <div className="w-[1140px] flex justify-center p-4 ">
        <div className="flex justify-center items-center mb-6 w-[480px] h-[480px] ">
          <div>
            <div className=" font-rem w-[380px] h-[400px] text-[58px] p-10 text-[#fff] ">
              <div className=" font-noto font-bold ">김 가 형</div>
              Blockchain <br /> Frontend <br /> Developer
            </div>
            {/* <div className="flex gap-2 pl-10 w-[380px] bg-blue-400">
              <button className=" bg-slate-300 w-[110px] h-[40px] rounded-full">
                INTRODUCE
              </button>
              <button className=" bg-slate-300 w-[110px] h-[40px] rounded-full">
                PROJECT
              </button>
              <button className=" bg-slate-300 w-[110px] h-[40px] rounded-full">
                CONTACT
              </button>
            </div> */}
          </div>
        </div>
        <img
          src="./images/development.png"
          alt="developer"
          className=" w-[480px] h-[480px]"
        />
      </div>
    </div>
  );
};

export default Intro;
