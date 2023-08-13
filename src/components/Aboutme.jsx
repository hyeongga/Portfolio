import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiVelog } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const Aboutme = () => {
  return (
    <div className="w-full flex flex-col items-center p-14 bg-[#8548D4]">
      <div className="font-han text-[48px]">ABOUT ME</div>
      <div className="w-[1140px] bg-slate-200 text-center">
        안녕하세요. 성장과 몰입을 즐기는 개발자 김가형입니다. <br />
        자기소개 <br />
        경력
      </div>

      <div className="flex justify-evenly w-[1140px] py-4 text-[#e5e0ec]">
        <div className="flex items-center gap-3">
          <BsFillPersonFill size={24} />
          김가형
        </div>
        <div className="flex items-center gap-3">
          <MdEmail size={24} />
          ----@----.com
        </div>
        <div className="flex items-center gap-3">
          <BsFillTelephoneFill size={24} />
          010.0000.0000
        </div>
      </div>
      <div className="flex justify-evenly w-[1140px] py-4 text-[#e5e0ec]">
        <div className="flex items-center gap-3">
          <SiVelog size={24} />
          <Link to="https://velog.io/@hyeonga">블로그 바로가기</Link>
        </div>
        <div className="flex items-center gap-3">
          <AiFillGithub size={24} />
          <Link to="https://github.com/hyeongga">깃허브 바로가기</Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
