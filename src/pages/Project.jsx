import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Project() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const image = searchParams.get("image");

  const age = searchParams.get("image");

  useEffect(() => {
    console.log(image);
  }, []);

  return (
    <main className="bg-green-100 max-w-screen-xl mx-auto w-full grow flex flex-col justify-center items-center py-8">
      <div>
        <img src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
      </div>
      <div className="mt-8 text-4xl font-bold">{title}</div>
      <div className="mt-8">{desc}</div>
    </main>
  );
}

export default Project;
