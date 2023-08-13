const Skill = () => {
  return (
    <div className="w-full flex flex-col items-center p-14 bg-yellow-400">
      <div className="text-[48px] font-han">SKILL</div>
      <div className="flex justify-evenly w-[1140px] py-4">
        <div className="flex flex-col items-center rounded-xl bg-white shadow-2xl w-[230px] h-[330px]">
          <div className="text-center font-noto font-semibold text-orange-500  w-[200px] text-[24px] p-2 border-b border-[#d2d2d2]">
            Language
          </div>
          <img src="./images/language.png" alt="" className="h-[270px]" />
        </div>
        <div className="flex flex-col items-center rounded-xl bg-white shadow-2xl w-[230px] h-[330px]">
          <div className="text-center font-noto font-semibold text-orange-500 w-[200px] text-[24px] p-2 border-b border-[#d2d2d2]">
            Library
          </div>
          <img src="./images/library.png" alt="" className="h-[270px]" />
        </div>
        <div className="flex flex-col items-center rounded-xl bg-white shadow-2xl w-[230px] h-[330px]">
          <div className="text-center font-noto font-semibold text-orange-500 w-[200px] text-[24px] p-2 border-b border-[#d2d2d2]">
            Cooperation
          </div>
          <img src="./images/Cooperation.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
