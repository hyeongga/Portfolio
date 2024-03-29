import PortfolioCard from "./PortfolioCard";
import portfolioData from "../portfolioData.json";

const Portfolio = () => {
  return (
    <ul className="bg-indigo-100 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
      {portfolioData.map((v, i) => {
        return (
          <PortfolioCard
            key={i}
            index={i}
            image={v.pjtImg}
            title={v.pjtTitle}
            desc={v.pjtDesc}
          /> //link할때 url 주소에 숫자부여
        );
      })}
    </ul>
  );
};
export default Portfolio;
