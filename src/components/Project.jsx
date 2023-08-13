import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="w-full p-14 bg-[#5b5b5b] flex flex-col items-center ">
      <div className="text-[48px] font-han text-[#fff]">PROJECT</div>
      <div className="flex flex-col items-center w-[1140px] py-4 ">
        <ProjectCard index={0} image={"7"} title={"asfd"} desc={""} />
        <ProjectCard index={0} image={"react"} title={"asdf"} desc={""} />
        <ProjectCard
          index={0}
          image={"cooperation"}
          title={"werds"}
          desc={""}
        />
      </div>
    </div>
  );
};

export default Project;
