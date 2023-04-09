// //props사용
// const PortfolioCard = (props) => {
//   return (
//     <li className="bg-purple-300 w-60 h-72 rounded-xl">
//       {/* object-fit : -cover */}
//       <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
//         <img src="{props.img}"></img>
//       </div>
//       <div className="text-xl font-bold mt-2 mx-2">{props.title}</div>
//       <div className="mt-2 mx-2">{props.content}</div>
//     </li>
//   );
// };

// export default PortfolioCard;

// //구조분해 UseEffect사용--------------------------------------------------------
import { useEffect } from "react";

function PortfolioCard({ title, desc, image }) {
  useEffect(() => {
    console.log(title);
    console.log(desc);
    console.log(image);
  }, []);

  return (
    <li className="bg-purple-100 w-60 h-72 rounded-xl">
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="project image"
        ></img>
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
      {/* <button className="absolute bottom-0 right-0 m-4 px-4 py-2 rounded-lg bg-red-200"></button> */}
    </li>
  );
}

export default PortfolioCard;
