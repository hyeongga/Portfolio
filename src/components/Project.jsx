import ProjectCard from "./ProjectCard";
import projectData from "../projectData.json";
const Project = () => {
  return (
    <div className="w-full p-14 bg-[#5b5b5b] flex flex-col items-center ">
      <div className="text-[48px] font-han text-[#fff]">PROJECT</div>
      <div className="flex flex-col items-center w-[1140px] py-4">
        {projectData.map((v, i) => {
          return (
            <ProjectCard
              key={i}
              index={i}
              image={v.pjtImg}
              title={v.pjtTitle}
              member={v.pjtMember}
              desc={v.pjtDesc}
              spec1={v.pjtSpec1}
              spec2={v.pjtSpec2}
              spec3={v.pjtSpec3}
            /> //link할때 url 주소에 숫자부여
          );
        })}
      </div>
    </div>
  );
};

export default Project;
