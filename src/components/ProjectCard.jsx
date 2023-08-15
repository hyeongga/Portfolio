import { useState } from "react";
import { Link } from "react-router-dom";

function PortfolioCard({
  title,
  desc,
  image,
  index,
  member,
  spec1,
  spec2,
  spec3,
}) {
  return (
    <div className="bg-slate-50 shadow-2xl w-[1000px] rounded-xl m-4 p-10 ">
      <div className="font-noto font-bold text-[40px] text-center">{`${title}`}</div>
      <div className="font-noto font-thin text-[16px] text-[#6c757d] text-center">{`${member}`}</div>
      <div className="mt-10  flex justify-between">
        <img
          className="w-[450px] h-[350px]"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="project image"
        ></img>
        <div className="w-[450px] ">
          <div className="mt-2 mx-4 font-noto">
            <ul>
              {desc.map((v, i) => {
                return <li className="mb-2">{v}</li>;
              })}
            </ul>
          </div>
          <div className="border-gray-300 border-b-[1px] my-4"></div>
          <div className=" font-noto mx-2">
            <div className="font-bold my-1">▪ 주요기능</div>

            {spec1.map((v, i) => {
              return (
                <ul className="pl-4">
                  <li>{v}</li>
                </ul>
              );
            })}
          </div>
          <div className="  font-noto mx-2">
            <div className="font-bold my-1">▪ 기술스택 및 개발환경</div>
            <div className="pl-4">{spec2}</div>
          </div>
          <div className="  font-noto mx-2">
            <div className="font-bold my-1">▪ Github</div>
            <Link
              className="pl-4"
              to={`https://${spec3}`}
            >{`https://${spec3}`}</Link>
          </div>
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
