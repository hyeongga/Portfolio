import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiVelog, SiNotion } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const Aboutme = () => {
  return (
    <div className="w-full flex flex-col items-center p-14 bg-[#8548D4]">
      <div className="font-han text-[48px] ">ABOUT ME</div>
      <div className="w-[1140px] py-8 mb-3 text-center font-noto text-[#e5e0ec]">
        안녕하세요. 성장과 몰입을 즐기는 개발자 김가형입니다. <br />
        긍정적인 마음과 적극적인 태도로 개발에 임합니다. <br />
        블록체인 기술이 핵심 솔루션이 될 수 있는 서비스를 만들어 나가고
        싶습니다.
      </div>
      <div className=" flex justify-evenly py-2  w-[1140px]">
        <div className="flex flex-col gap-4  text-[#e5e0ec]">
          <div className="flex gap-3">
            <BsFillPersonFill size={24} />
            김가형
          </div>
          <div className="flex gap-3">
            <BsFillTelephoneFill size={24} />
            {`${process.env.REACT_APP_PHONE}`}
          </div>
        </div>
        <div className="flex flex-col gap-4  text-[#e5e0ec]">
          <div className="flex   gap-3">
            <MdEmail size={24} />
            {`${process.env.REACT_APP_EMAIL}`}
          </div>
          <div className="flex gap-3">
            <AiFillGithub size={24} />
            <Link to="https://github.com/hyeongga">깃허브 주소</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-[#e5e0ec]">
          <div className="flex  gap-3">
            <SiNotion size={24} />
            <Link to="https://galvanized-need-1fa.notion.site/0c65a08fc86f4bba92ac73af90121417?pvs=4">
              이력서 주소
            </Link>
          </div>
          <div className="flex  gap-3">
            <SiVelog size={22} />
            <Link to="https://velog.io/@hyeonga">블로그 주소</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
